import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import StarIcon from "@/assets/icons/star.svg"
import bookImage from "@/assets/images/book-cover.png"
import Image from "next/image";
import { toolboxItems } from "@/components/TechStack";
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.jpg"
import smileMemoji from "@/assets/images/memoji-smile.png"
import { hobbies } from "@/components/Hobbies";

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about I am, what I do, and what Inspires Me."
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspections.</p>
          </div>
          <Image src={bookImage} alt="Book cover" />
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>My Toolbox</h3>
            <p>Explore the Technologies and Tools use to craft Exceptional Digital Experiences.</p>
          </div>
          <div>
            {toolboxItems.map(item => (
              <div key={item.title}>
                <TechIcon component={item.iconType} />
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <div>
            <StarIcon />
            <h3>Beyond The Code</h3>
            <p>Explore my Interests and Hobbies beyond the Digital Realm.</p>
          </div>
          <div>
            {hobbies.map(hobby => (
              <div key={hobby.title}>
                <span>{hobby.title}</span>
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <Image src={mapImage} alt= "map" />
          <Image src={smileMemoji} alt= "smiling emoji" />
        </Card>

      </div>
    </div>
  )
};
