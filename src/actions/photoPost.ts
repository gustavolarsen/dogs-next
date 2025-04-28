'use server';

import { PHOTO_POST } from '@/utils/api';
import apiError from '@/utils/apiError';
import { revalidateTag } from 'next/cache';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function photoPost(state: object, formData: FormData) {
  const token = (await cookies()).get('token')?.value;
  const nome = formData.get('nome') as string | null;
  const idade = formData.get('idade') as string | null;
  const peso = formData.get('peso') as string | null;
  const img = formData.get('img') as File;

  try {
    if (!token || !nome || !idade || !peso || img.size === 0)
      throw new Error('Preencha os dados.');
    const { url } = PHOTO_POST();
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + token,
      },
      body: formData,
    });
    if (!response.ok)
      throw new Error(`Erro ao enviar a foto. Código ${response.status}`);
  } catch (error: unknown) {
    return apiError(error);
  }
  revalidateTag('photos');
  redirect('/conta');
}
