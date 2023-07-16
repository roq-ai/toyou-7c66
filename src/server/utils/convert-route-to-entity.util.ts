const mapping: Record<string, string> = {
  companies: 'company',
  locations: 'location',
  messages: 'message',
  skills: 'skill',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
