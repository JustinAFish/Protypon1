import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon } from "./Icons";
import cubeLeg from "../assets/cube-leg.png";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Greater Productivity",
    description:
      "The automated creation of Assessment with rapidly increase the productivity of the lecturer for the University",
    icon: <ChartIcon />,
  },
  {
    title: "Improved Quality",
    description:
      "Quality and error free drafting at pace avioding issues such as incorrect dates, legacy information, summation errors, spelling errors, etc. ",
    icon: <WalletIcon />,
  },
  {
    title: "Better Experience",
    description:
      "With the additional time the lecturer will be able to spend more time with the students improving the overall experience.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Novel and Standardised",
    description:
      "Protypon produces consistent, novel assessments with a consistent level of Assessments.",
    icon: <MagnifierIcon />,
  },
];

export const Services = () => {
  return (
    <section className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Academic{" "}
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Value
            </span>
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Rapid creation of bespoke assessments from the module handbook,
            reducing the overhead on the academic.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <img
          src={cubeLeg}
          className="w-[300px] md:w-[500px] lg:w-[600px] object-contain"
          alt="About services"
        />
      </div>
    </section>
  );
};
