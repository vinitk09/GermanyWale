import React from 'react'
import { ServiceCard } from './ServiceCard';
import "./Services.css";

const SERVICES_DATA = [
  {
    title: 'Free Counselling',
    description: 'Get Free Expert Guidance on your Study Abroad dream and shortlist courses from a plethora of 500+ Universities and 15,000+ courses.',
    image: 'https://s3-alpha-sig.figma.com/img/d5e4/568d/6031909819e8151d7a908fa627887dad?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HlSgHniBo5ikNbT4Vvs7L4xvUrvA3WXXwnn~LPZb4rQkNB0Vo-EXwcLQJh0BSnY1dc3Fx2vbQE6~jUgIzrWUxFNv-z~wTQguiqT69bnMDfg6hbnh34hAE~DNukIvOf97CxED1NPxKkS7oQS5snNwS7muoSI-YPyJj6sZObi6~BnCf8kcWTVlvIq8kvDmYEFGnoact-iGV50sh66eHHwtaT39gS1w3WlrhbMnAYkC7XsxvozPOlimkDpA1vmSaiuwqKDJ9g5qT-nUBVwWSo2WkM4PxRhnE19i2-xt11rTxLgB8p~CfLnnxKY-T6ZSWdw724Iu6OE0d9S4Ut~Yd69u8A__',
    imageAlt: 'Free counselling session',
  },
  {
    title: 'University Shortlisting',
    description: '50% Applications fail due to wrong choice of university. Apply to multiple institutions in a single application with numerous fee waivers and save your time',
    image: 'https://s3-alpha-sig.figma.com/img/433e/90ad/fbe486db801cb7c3da281294afdc8e79?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=UHJQWdvKAn2K7o4eCPYLHJTPZuNRHF8Gi~Ln7INphu~6JCFB2Zr6~jCE2bmwpVKECr4sR4U5FOeZYjclG6H0EBrge-FFdjFBWqQh~ShaZOSDXgyl8I7LiLgUsLi9uWk18T~h-jS0p1J85LTVJZJ0pENrVtZWX7XCWnQABm~AyenoranYphn0itJlOdaMtuEyg-5mGR6Rei69caK-0jW5qRsMBq~LVuCLFAUhjSWiY9vFh0QHZVW548XcGVtkqFGHAiRuZxJpMUPEkU47lcIU0fwIojNau0sxbPiBFfoNu-trVI1Z0DDTDXXuHLD2P~r3iSVLhBQ-NtPdrdxNhXtRew__',
    imageAlt: 'University selection process',
    isReversed: true,
  },
  {
    title: 'Statement of Purpose',
    description: 'Get an Education Loan without Collateral within 3-5 working days at competitive Interest Rates and clear the financial hurdle.',
    image: 'https://s3-alpha-sig.figma.com/img/9fa6/f7b4/0c881b39f69fd087f8232076b8c469b8?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaG5XQjuNmbsXAbg-532pUX8MyNv9zalJlk0XdD4OAnseuZfNbZ9v2bQHGjUN45WBijz4HKIp0jXIc3VL7YJaVYoFLRhV9JvnHQsyVxadz7dZsZMthuVMvGcOw5rtsJ78g1SkHjd2knLOZ8yCCqxZhJB~lPA6d3XswTrr0BPUPrnRTNHpWbI-W54MvQVkb0jmTb848puW7g2eLvF64IUW9A1HV9TUc6Tgun6rCLDP37BHaDmeR14a2pj2VqBkJb5J9TZSq18FDAh3Pb0rpbbjQ0scD4OxpMliqsqEW3dM52JOW~IR1yLlDSJYwlSRg4MpvfF5JtzqTYwDZfB~t29gw__',
    imageAlt: 'Writing statement of purpose',
  },
  {
    title: 'Curriculum Vitae',
    description: 'Unlock your potential with Germanywale - CV enhancement experts for successful university applications',
    image: 'https://s3-alpha-sig.figma.com/img/8bb2/cfaf/471406e27ee7d39c295213b196d644b6?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BN~TF6u3~OkcND8y9rDW1zhbiu9oc4qXSaDrfgn37PvBZtrlQkKKhNAa1vmO2Wucmu696jdLendN-iifFbhW2TqzKXD4Hst8mJKCOOLHnHH6rRUSsLp~z9bbL~IMT-ckCal-UCZgv7Y~r9LQ4mAz~4-55sVpBhOTOAt-VROcD1hm~BFHJ7qS0rqP8JyEX6Rh7meyHfWMl4QSZjtSBQOKKL9qpuRFdSs1eOMfFjga-UNjzV7Wm5nWhJKM6dpPoTmhCeqDVOdvwy3uc7j9Nl8v374N0lL6YBl8SuoKsiNkQSquAncg1Am27NtH37dYBg2SPSkbqKdg87m9Tn4tL4WCJw__',
    imageAlt: 'CV preparation',
    isReversed: true,
  },
  {
    title: 'Letter of Recommendation',
    description: '"Good" to "Great" - Letter of recommendation ',
    image: 'https://s3-alpha-sig.figma.com/img/cc8c/c485/a71d564bd76dd7ccbc953415bdaf4201?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oH~53~PqUqwoyCVt-r5xh~r4X~Hy-15YnBUgrrR9CxVJr0OkErrwOlxuskbGYueebSG-B0uTJGLRBMfvl7MVn1L9kmtRc1iuZB2JKeXbz0mPN1NycGO5Zp-VkZZTOekPNbe1hBOCXx3zcjRVKZqkkReOn~gLrV8ipRwW44asJmOyaolV6nRe7i91nqzQtQAeozLT-GOTqAfAnX37W8o0XcL9TFX6L7TvjYRu8HMlrvvfwxgv-FhAvO8VRgzf1EGHjYQwfvFzXtsta8DGn5Grlw~REZb5TNolJcd0UDafankGgJsUzBbsoNfBFOV58dfJhOOHGHb41PXV3dZLagCr-Q__',
    imageAlt: 'Letter of recommendation',
  },
  {
    title: 'University Application',
    description: 'Send your money abroad securely for University Fees, GIC, LIVING Expenses or a Blocked Account at the lowest Exchange Rates and fastest processing.',
    image: 'https://s3-alpha-sig.figma.com/img/45d7/323e/4c4238238068c65b6b328d940f77463e?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l~6VfVE0PR7y6h1GW7i~YGhrr4BVLcEmdZjqiex1KeXGSynrWjIaxG3SbqgoMM8Gdfd24v~XlHxWYJW9NZzNlc3Wqw29L8lW1nQcU4uPSLuy3fpS8kO4CcC1Y1aT~3ib31ePsMQ24wdz86sEVvFoq3p9fHKC8RtmKLtvrP9gUs~ox~BkGBVnpSg2tlvMnWdgiKJxt8~cBeUHMqrG04imp47Rl4S~SFdh8J3tp2SNWlV~GrW1Sgl6KQOUAo3TtpAXKJdS15O8ww5XIyGA5xt9dSoT4X9r9VffHvHFu15RI6~ie7EI23GlXQJ2Sx2wQfYS~3pHKred2WB2K2KNdMOG2A__',
    imageAlt: 'University application process',
    isReversed: true,
  },
  {
    title: 'Visa Assistance',
    description: 'With our Visa Expert, fulfil the Visa application requirements and apply for the Visa. We have a success rate of more than 95.5%',
    image: 'https://s3-alpha-sig.figma.com/img/aaee/fb49/389a0aaa1d819443e5e53fdba62b549a?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=p2svrzkzeBv1tX0ITpbHdKwW-kWgnG~UKJYcbyPNnNEt3BHuTc1ukFMaeoh9ds0AzHmrcEYa5vQEoGZAtZ7~FmQXqxRPEafzx9zhT6AsNOV318B-l1bYvFw4CdUgCrvkNQE0jt1ctWle5ggCykHj2KudxQ-LmdGPHRg-g9-mQ-VyEUDbLkgyMxeLoANUQRCBj4g84k7jwnotNS66vkLVfS~fDnmyjiDSeKm0FOis09wRJydDSL9sOGO87DPoaen7sDVD2X0nMToNdG1Kxe3F~zE7TCpOIUdlE2EeROLhCkOtmycjxZj92BhHs03it9FMptqSwGmU2uhWnAbRmlKA~Q__',
    imageAlt: 'Visa assistance',
  },
  {
    title: 'Accommodation and Travel Assistance',
    description: 'Struggling to find accommodation before moving to a new country? Not anymore. Book your secure accommodation online and stay stress-free.',
    image: 'https://s3-alpha-sig.figma.com/img/94ac/68d6/1df76b947c31969f57bbb90f0286488d?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZiSgA1pSKdolG4Kutst0Ab-iO7TnfZPVCy3uX4tztU5uocV-Omvidil5F9Hjfr0cmD7FZN4oXKxuzd3VchINgW0UaqLl2FTfN4QBCBV8QSaoLo5xcsJtdbXk0PVJiUbtWBMOT5pefhGRG10ta-yA1tzOgDhunZ7rUR7J5PN5lKCVld~GPPQW0o~TuMwPnuUelCa5YZi07VA2oaoOOpiJqqOM0Z3e5epZqTtWqIp05Csk8cdtSvwTRC2H4HPuq7SoI8DZnDoTYWCLXojL0CQptrI71CWB3wvhpKFHi~tp1P5UaONha1EFXkGBO7QNKpNcSyB5rQKDrfig2cg5mu5HYw__',
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