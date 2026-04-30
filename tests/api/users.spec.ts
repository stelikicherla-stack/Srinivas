import { test, expect } from '@playwright/test';
import { getRequest, postRequest } from '../../utils/apiClient';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

test('GET Users API', async () => {
  const response = await getRequest(`${BASE_URL}/users`);
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.length).toBeGreaterThan(0);
});

test('POST User API', async () => {
  const payload = {
    name: "John Doe",
    email: "john@example.com"
  };

  const response = await postRequest(`${BASE_URL}/users`, payload);
  expect(response.status()).toBe(201);
});