type DateStyle = Intl.DateTimeFormatOptions['dateStyle'];

export type SiteConfig = {
  title: string;
  description: string;
  author: string;
  dateFormatter: (
    dateString: string,
    dateStyle: DateStyle,
    locale: string,
  ) => string;
};

export const siteConfig: SiteConfig = {
  title: "Sk3p7ic's Blog",
  description:
    'A blog detailing the research, projects, and other musings of me, sk3p7ic.',
  author: 'Joshua Ibrom (sk3p7ic)',
  dateFormatter: (
    dateString: string,
    dateStyle: DateStyle = 'medium',
    locale = 'en',
  ): string => {
    const date = new Date(dateString.replaceAll('-', '/'));
    const formatter = new Intl.DateTimeFormat(locale, { dateStyle });
    return formatter.format(date);
  },
};
