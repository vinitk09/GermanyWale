import React from "react";
import PartnersHeader from "./PartnersHeader";
import WavePattern from "./WavePattern";
import PartnerLogo from "./partnerLogo";
import a from "../../assets/axis.png";

const partners = [
  {
    name: "Axis Bank",
    logo: "https://s3-alpha-sig.figma.com/img/32b9/9c84/fc8ba0610acb2be3e36317366ec8bd4c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TTV5cgA0V3gMEArWidajC3YomLmiQp~~xMyDYC3cdTyJjLfbknwhGQ2mRmPKvBcl4cqx9FQ~rJogN9Sty5fFTZvmazS4LFG7y5Fp0swQjY8th4~fSXW2EGONIWYXnilyy45nteO~XOsCKu7CE4B7TToqLp9UB8AOVAXMJG8IqeqtTZ5lOc9HFAY-Skxftg4sPelzo3rzGvCzbhlDYoSX~M8W80rz74vZEOsuWbt-R8FdUwxSKWW~dANgOb9pfGbeeBp72Fct5BrlVb7EL6ZEJ8fsiS921xQ0dVcYrEftwVQ9m2qXZcioj0RvdliJDfdUjFXaCiiRMNPCKrJbPRjDDg__",
  },
  {
    name: "Flywire",
    logo: "https://s3-alpha-sig.figma.com/img/8f08/1b49/52a328c033eb6c5b45294448df17b1a8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=X9P-BIPEpRETM9a1p2A69yOs1~g6melCNpcewrXt-352cxaWZtQs9W1NncdPSu41QpfqyBheNE~xyOSusVJT0mJ3rAvGF7JqKg7es175KWAcqFqAPIh7hPq1Ed4nfvTwAV7G6bENyWT1tN8ZQ7DQmEjvB5WTUWbQgINtPaY~j7L2yQXUwpxhoVfVSXFqPihAaLLcg2CDgtVXVULep15TOiNSJZHy045-SmzcbHA7qpJnB7bXb3JJDFrzKryn8C3sBAo51IrlKQriV-zF~sxNPvdGCNUIzGyyAzfN88KOC9j2fWe0f8z4Phge4lonrCdjwuyMgChuVejGpJYwt9eIMg__",
  },
  {
    name: "RemitOut",
    logo: "https://s3-alpha-sig.figma.com/img/2b2a/d5b2/8c1b46c658e92ef1414e048629eb2754?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XjuCskO8npamfKVaD-6kCQq8YBGzb-KrfbuND5sTmTCFvgYRipymfSiwRT432eF4OBW1JcZTceeah~fbnPoqwKzzYnyOBDMDcZ9w~1uE8~dsNw9kDptuzHLxv9n-g6YywEITwPavz4FBkesJpjS6FLVcAg7dqwmLo3XhSgcuKgew-Ni1wfzjilWJAaeK1QMk5cAieEuPySb9UFJnzX94yuuktsHb4~37eqoE1ZorhcysVBkU0b3YOBuHLP9NkSmmCZxsVTB1zsG2GQaSs3bmMbvckprSQg-U81hOQQbE7yRgfFtxSnQ0dbQMGDTGBQoSdEp5j4-VMU-pzK3-w9Nvmg__",
  },
  {
    name: "HDFC Credila",
    logo: "https://s3-alpha-sig.figma.com/img/5394/c7d3/4c55c4465dceeeccc612e74dc101f7e8?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MW262mjKVhEdTZDcSZUZ87cdukPiogtnMmroj2i0FhQCxUCTcwIXweXg1p6fVXnHX7XAqVYzoPf05y0gdP-T~ykamqL6v0z8ATANVYYLIlMTJ6E7pKdNgx~CwtLg3AY-70PcuefUJNy78MLuYLevg4JViBQRsFq67LckWeQDK~X-doBjBmo4vUY-UykoTWXkR~i3GepYG8Jib6WbsrjvOEduLkYYaLtV50P3~MLGpeZabR4Fn~YELjwb4rsAqAYGJ6FZbI2LStE9iKRcXoqQ9gOjvWFi88J~0Ok4ibAniCHz~BgOE0t2XvzYn~1-6qYDAJP~PgPuRonj4V-02RbNIw__",
  },
  {
    name: "Commerzbank",
    logo: "https://s3-alpha-sig.figma.com/img/f0b0/5e3b/e20a396d45b9162b62b02dc2f2aa7b56?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PoR0mgq5nPYoS3V3kpnUvjjw6S16fjBfs1JfD3kTuMyIn9rqMgVGKv8PzjIG8gfAK7eJoRPj4uAx62vjwlE-01NFY-xboZ-2g2DYW5POyRnreaHwUQ189WVC7PKfXn2OZFQaCG7YO~wt1xfH~zeO8swE6WGKsa2iV43SA9gh8GGBtSfRYBETrBcClwShjEOukyDcIT4c9BufG1Jwep1xl7gSWr4xTqphgZHWVCvotFMPK14SNRMQRKSRGaiDhbjNAzwHN2i34Vpo84aq4z2zStWQmAU7JEctjyUw3pqPowN6XiYI4cFbm5qS6TTJg33-dEvDuo4vX2nLcnjdelH1iQ__",
  },
  {
    name: "Bajaj Allianz",
    logo: "https://s3-alpha-sig.figma.com/img/a899/e2cb/e0a9c5fcbce180bca7b6a209f4df5eb6?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KAqsZmsdAjrSDgZDMA8fRvHh324WU3HLtlclx5TbUffK6L4kVRxdNjY-ILXKt5u7FGADb5XXrAhBLuerGU9RBVgozWhpgABvyapHmawwJb9b8~~8QvX2xpoHgiXcs8sWKCFd2KjG22sc5LC9c2Yq-BF23FRj0veGSCxGWtPMzL7BNeq2JdjRUmmob5r9moYRvVlFtt3JOK3HhOKvyzURAU0pkDjC3pD6wU3rIUZ4J~~gGnBt84iwZ7~WGe9cDp0p-2GXElmZTDGr7Se9PXmLx90kqThUKk4Qr42UOxLE6WWb6gBX37qNH-lIAdTcg1Q08IFFNE8VVOZTrQZRnaxBCg__",
  },
];

const Partners = () => {
  return (
    <section className="bg-gray-900 text-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <PartnersHeader />

        <div className="relative">
          <WavePattern />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 items-center justify-items-center mt-8 md:mt-12 lg:mt-16">
            {partners.map((partner) => (
              <div key={partner.name} className="w-full flex justify-center">
                <PartnerLogo
                  key={partner.name}
                  name={partner.name}
                  logo={partner.logo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
