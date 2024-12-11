import React from 'react'
import { ServiceCard } from './ServiceCard';
import "./Services.css";

const SERVICES_DATA = [
  {
    title: 'Free Counselling',
    description: 'Get Free Expert Guidance on your Study Abroad dream and shortlist courses from a plethora of 500+ Universities and 15,000+ courses.',
image:'https://s3-alpha-sig.figma.com/img/d5e4/568d/6031909819e8151d7a908fa627887dad?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KKKM70i6XijzEUXVCsK9hBEQOz4ByUvJi0whZ1xG6kFHhHqRQTeK4RbxD-NFVbDocqIgU-zzwJkNM9tINXjmZWT4pmSLGZhGOifyl9iblNVFYRCCpXiCFq2QBljZ3AUnioisTd1OBID-P8r-sYRutMknutdLLfSWkUWLwGF6PzZ7joWD-cn4pFF1RldEbF~evPRXgZyKcOF5kPJBlBwQZLde0Emaj9f37bk7m3ACpgNukXA08oZEiE-dxr5M6lpUusmpJ0DnSHO4LfbyRASQO4952T2xSIow4JmllBCT7x9EIUOF4P~hizdqxNSy7xNc3I--f3Uwjk-6ZcWU89qCqw__'  , imageAlt: 'Free counselling session',
  },
  {
    title: 'University Shortlisting',
    description: '50% Applications fail due to wrong choice of university. Apply to multiple institutions in a single application with numerous fee waivers and save your time',
    image: 'https://s3-alpha-sig.figma.com/img/433e/90ad/fbe486db801cb7c3da281294afdc8e79?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M4NbyTXNt6xxGOVbjyTLkwW0lgVrnJn8KBcSz1D9MrbWTAJ76Oy2cmKnAoUy9PaBRFAHbalpRlXQGPmhLDSQaEpMiF4~pfEdtZq8ZtJ0MsRa2I57g6JBjf7gor2kXdxe9W1CyXBfdUK-RLEsc48NuHDyTXPCjnPkdkd5D88RFPM8q9iXfvAi5~8VesRDSn8HUbP2hFwL4lKkfADg99VT8kux2VqiERVWRqL2p1BVUw9nXfgbLhQ1iWGUsaRJxxWVMch-5SiEH3NU9c3rZF-jcHARk6~k5ToZoIi90Ojxb37AUoHQV0awYJv5CAaO3bDWu6tk1iXSGVTfnKe-Zmw39A__',
    imageAlt: 'University selection process',
    isReversed: true,
  },
  {
    title: 'Statement of Purpose',
    description: 'Get an Education Loan without Collateral within 3-5 working days at competitive Interest Rates and clear the financial hurdle.',
    image: 'https://s3-alpha-sig.figma.com/img/9fa6/f7b4/0c881b39f69fd087f8232076b8c469b8?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ryk0LR3TDrJEPvKEwueuJyAQ7anOMaVy-5oxn2ESO9AkEERytP85ofjTXoTMOQ~dqLiSEa~mWGF7xcaqbDY~hgpY05rAyKOFHm1emUuS~hqXiS5cxmvxdCVNr64Ozezp2iV2j6AW1P5SrcbM~i5FmKmXcqDe7oGrCDNIvnKF5Nk-wXwGG25gMHovlEePeUTXOssT--aZOrUa8I2XWRFmiJ4JQvlBrSDhmxZvXRCZUBvBrPo7RiRWCNlXFDnFZdSB0HIwnGK5TITCJHVfcmxQAdT6BucveaIJla0t9UZG3KqDAHYenTutP3V9w~8B9HNoMlGn7LuDHr9c6qk2BPqEgg__',
    imageAlt: 'Writing statement of purpose',
  },
  {
    title: 'Curriculum Vitae',
    description: 'Unlock your potential with Germanywale - CV enhancement experts for successful university applications',
    image: 'https://s3-alpha-sig.figma.com/img/8bb2/cfaf/471406e27ee7d39c295213b196d644b6?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D7CsEeIhdVicAqrQz3Dy~c9pX~A4maQYpZwgOSzAcZKnLmhim1go6~~pK~12uyFLDcpOH4Z8-oBI~T4ZdfRzmRRZmbx~E-LeD5gN98~5c4Pww0A0l2DiztFuaugZTX~6nvavB92b9XDtg4VR80uSh9kkoRVgikCBU7IkCwllHRBaACL4B36wdiswls7tbLzSyh9MBgVe70GFKbUFeK-ARBYS~lhk3sMpMJRFv4hQGYRHKjMw3hwtWQcU4ufqnYu5QqJf-js5EeeBkCoHtJtOqht3cpkmAB1paI1~nXTi0Lx7~E-0D6c2dSdU5phFMpXw1Ym6PiTHy5iYe9dM5Ug-WA__',
    imageAlt: 'CV preparation',
    isReversed: true,
  },
  {
    title: 'Letter of Recommendation',
    description: '"Good" to "Great" - Letter of recommendation ',
    image: 'https://s3-alpha-sig.figma.com/img/cc8c/c485/a71d564bd76dd7ccbc953415bdaf4201?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UIqnj2wi3g36MbsKlkz3BIWKRjO6Z3sp0xahSflFu8PW8QhJBBew8dk1b22RtUxY-1VJadoF54P6eTq2f2vTS-~d3KgPsaWNPv3drJ6DWl3YzcGY3wACmJploT6TJ0wOwCzPWlmq-gok17fOcbNp~hHZryVzANSGWJ6BcVJOtuVYlBgw4WT-PRgxj0pxIQbROFfmaFKeTuzXVsz-Yb7FXRSf6oAmv1CJ6CmTicV9A3cYTwFY~dg2qUE1aILOck3biwYF9fT6129x3-ZfJRdzbkSauBEVLGwMXoUKgZKCl2Tg7mH-yREBM9NDCdR9Sy613JNIVul05g-WFyjuH1XEsQ__',
    imageAlt: 'Letter of recommendation',
  },
  {
    title: 'University Application',
    description: 'Send your money abroad securely for University Fees, GIC, LIVING Expenses or a Blocked Account at the lowest Exchange Rates and fastest processing.',
    image: 'https://s3-alpha-sig.figma.com/img/45d7/323e/4c4238238068c65b6b328d940f77463e?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=be4TWZBWIolXomxA4nuKTUixQLBtIzc2yxfOrC~66EDUsLEf1LAYCD5QM5nJfDgk-EhMNNLtVLG~7yIff038B3h-~ZrDqDVLDf8-dvDzTqPJAe2YIMHKcOXMKNTySs3O20BVtsIiT~6yhKrcau1vEgQp-GJq7Kgsp5qE6OKVaNW~wz1tzNr-FpWcIxauxWyTJvd~RStBlPmub-MFAdeJbMkd4XcZohjGPwdAOsBIShyZ1g01ybW-mzAIoZIVCrrGr5e6FGoFCvoF17aXBXVGA-VSCy~OoEulwlwYTQ6RgZPYeC20TAUGwnh236jal-jW-mWrRdWQX1fhGu2qLHhCSw__',
    imageAlt: 'University application process',
    isReversed: true,
  },
  {
    title: 'Visa Assistance',
    description: 'With our Visa Expert, fulfil the Visa application requirements and apply for the Visa. We have a success rate of more than 95.5%',
    image: 'https://s3-alpha-sig.figma.com/img/aaee/fb49/389a0aaa1d819443e5e53fdba62b549a?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CSZhJ4yZYyTURQMZiUScRnesK-mg4LxUjqMEEwqJwhlzbf9s4~6ghko1UKjH610JDkjTTzgSSDezxzJnb~3Wb3vZCZ2WSiZP9iRh~vB6iM67hBr~3-CCxLJCAkqwZEPQm46ZpKK~EAeVQlC3A9l5BJzzbD-wjerUwoM53mQYrYbJ~Vas8QGXwBfypftmgWhxDm0xW0uiA1xOaAcY3vMavZTWIWSjN3yO30y-ABuTjjflAdNxt51my3WApu3yyuharVYbD132gwlsQxX9cZlznaiADD~gA~~qNwvGdYAEkgFEUwGOt9ewZrqBQsZ68YEl~YPJQeZk-phav5SBVtIi1g__',
    imageAlt: 'Visa assistance',
  },
  {
    title: 'Accommodation and Travel Assistance',
    description: 'Struggling to find accommodation before moving to a new country? Not anymore. Book your secure accommodation online and stay stress-free.',
    image: 'https://s3-alpha-sig.figma.com/img/94ac/68d6/1df76b947c31969f57bbb90f0286488d?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jOKjY7J6zVgjPYrvY7eOyggohJqmy9LiP~vsh51-Muc5E72ge5ygfc7Hm81l-adWx2XwWzo8pJ3frtjWEvyW6ZsctiNo5T4wSfciF0xImn7zIqUb6E~o-DF8YA5AYF9EM0n~8vDFySYmeXN9mFcw2HssNe8swBsc4Xc8JtNpqRnkAYTKI2CeVDSunnumOSZjLcIWVsxaqz0LkQNl9Jf4O1xXkCKbHioPDyN2i4XRMH73ZkbTWnp9G-AaVJvm961AuMJjkvI9VI8jQMgGZ6JFZRkmHpxvSWenWvELeMD1REKBrc-3Gi7WFvGqyFWyYXKy3P7FJ1E62CBdPCzbblK3Ow__',
    imageAlt: 'Accommodation assistance',
    isReversed: true,
  },
];

export default function Services() {
  return (
 <section className="py-16 lg:py-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 lg:mb-24 relative">
          <h2 className="services-heading">
            SERVICES
          </h2>
          <span className="what-we-do">
            WHAT WE DO
          </span>
        </div>
        
        <div className="space-y-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}