import { request } from '@playwright/test';

export async function getRequest(url: string) {
  const context = await request.newContext();
  const response = await context.get(url);
  return response;
}

export async function postRequest(url: string, body: any) {
  const context = await request.newContext();
  const response = await context.post(url, { data: body });
  return response;
}