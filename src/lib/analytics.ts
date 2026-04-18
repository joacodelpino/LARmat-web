declare function gtag(...args: unknown[]): void;
declare function clarity(method: string, ...args: unknown[]): void;

type EventParams = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, params?: EventParams) {
  if (typeof gtag !== 'undefined') {
    gtag('event', eventName, params ?? {});
  }
}

export const events = {
  whatsappClick: (source: 'navbar' | 'cta') =>
    trackEvent('whatsapp_click', { source }),

  phoneClick: () =>
    trackEvent('phone_click'),

  formSubmit: () =>
    trackEvent('form_submit', { form_name: 'contacto' }),

  navLinkClick: (label: string) =>
    trackEvent('nav_link_click', { label }),
} as const;

export { clarity };
