import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Validação básica dos campos obrigatórios
    const requiredFields = [
      "name",
      "email",
      "password",
      "profile",
      "workType",
      "monthlyIncome",
      "goals",
    ];
    for (const field of requiredFields) {
      if (
        !data[field] ||
        (Array.isArray(data[field]) && data[field].length === 0)
      ) {
        return NextResponse.json(
          { error: `Campo obrigatório: ${field}` },
          { status: 400 }
        );
      }
    }

    // Criar usuário no Supabase Auth
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    // Criar perfil do usuário na tabela profiles
    const { error: profileError } = await supabase.from("profiles").insert([
      {
        id: authData.user?.id,
        name: data.name,
        email: data.email,
        profile: data.profile,
        work_type: data.workType,
        monthly_income: data.monthlyIncome,
        goals: data.goals,
      },
    ]);

    if (profileError) {
      if (authData.user?.id) {
        await supabase.auth.admin.deleteUser(authData.user.id);
      }
      return NextResponse.json(
        { error: "Erro ao criar perfil do usuário" },
        { status: 500 }
      );
    }

    // Retornar sucesso com o token de sessão
    const response = NextResponse.json({ success: true });

    // Se tiver sessão, salvar o token em cookie
    if (authData.session) {
      response.cookies.set("sb-access-token", authData.session.access_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
    }

    return response;
  } catch (err) {
    console.error("Erro no registro:", err);
    return NextResponse.json(
      { error: "Erro ao processar requisição" },
      { status: 500 }
    );
  }
}
 