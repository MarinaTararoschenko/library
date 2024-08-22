export interface Contact {
    city: string;
    country: string;
    country_code: string;
    currency_code: string;
    flag_url: string;
    phone_code_type: string;
    phone_code: string;
    main_phone: string;
    main_phone_href: string;
    taxez: string;
    currency_number: number;
}

export const CONTACTS = [
    {
        city: 'Santiago',
        country: 'Chile',
        country_code: 'cl',
        currency_code: 'CLP',
        flag_url: '/assets/images/flags/cl.svg',
        phone_code_type: 'default',
        phone_code: '+56',
        main_phone: '+56 2 3210 9063',
        main_phone_href: '+56232109063',
        taxez: ' + IVA',
        currency_number: 1
    },
    {
        city: 'Santiago',
        country: 'Chile (IP)',
        country_code: 'cl',
        currency_code: 'CLP',
        flag_url: '/assets/images/flags/cl.svg',
        phone_code_type: 'ip',
        phone_code: '+44',
        main_phone: '+44 210 9063',
        main_phone_href: '+442109063',
        taxez: ' + IVA',
        currency_number: 1
    },
    {
        city: 'Lima',
        country: 'Perú',
        country_code: 'pe',
        currency_code: 'PEN',
        flag_url: '/assets/images/flags/pe.svg',
        phone_code_type: 'default',
        phone_code: '+51',
        main_phone: '+51 1 1707 0316',
        main_phone_href: '+51117070316',
        taxez: ' + IGV',
        currency_number: 5
    },
    {
        city: 'Ciudad de México',
        country: 'México',
        country_code: 'me',
        currency_code: 'MXN',
        flag_url: '/assets/images/flags/mx.svg',
        phone_code_type: 'default',
        phone_code: '+52',
        main_phone: '+52 55 4163 8355',
        main_phone_href: '+525541638355',
        taxez: '',
        currency_number: 7
    },
    {
        city: 'Buenos Aires',
        country: 'Argentina',
        country_code: 'ar',
        currency_code: 'ARS',
        flag_url: '/assets/images/flags/ar.svg',
        phone_code_type: 'default',
        phone_code: '+54',
        main_phone: '+54 11 5168 6187',
        main_phone_href: '+541151686187',
        taxez: '',
        currency_number: 10
    },
    {
        city: 'Bogotá',
        country: 'Colombia',
        country_code: 'co',
        currency_code: 'COP',
        flag_url: '/assets/images/flags/co.svg',
        phone_code_type: 'default',
        phone_code: '+57',
        main_phone: '+57 1 328 9068',
        main_phone_href: '+5713289068',
        taxez: '',
        currency_number: 6
    }
];
