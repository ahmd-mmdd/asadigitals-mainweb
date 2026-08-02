import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { teamMembers } from "@/data/projects";

export function FeaturedProjects() {
  return (
    <section className="bg-bg2 py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-5 md:px-6">
        <SectionHeading
          center
          eyebrow="Our Team"
          title="Kenali Tim di Balik Setiap Karya"
        />

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">
          {teamMembers.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.1}>
              <div className="card-shadow card-shadow-hover h-full overflow-hidden rounded-[20px] border border-line bg-card transition-all duration-300 hover:-translate-y-1.5">
                {/* Foto */}
                <div
                  className="relative flex aspect-[16/8.5] items-center justify-center overflow-hidden"
                  style={{ background: member.gradient }}
                >
                  {member.image ? (
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <span className="font-heading text-5xl font-bold text-white/90">
                      {member.name.charAt(0)}
                    </span>
                  )}
                </div>

                {/* Info */}
                <div className="p-7">
                  <span className="mb-4 inline-block rounded-full bg-accent/10 px-3 py-1.5 text-[11.5px] font-semibold text-accent">
                    {member.role}
                  </span>

                  <h3 className="mb-2.5 text-xl font-semibold text-txt">
                    {member.name}
                  </h3>

                  <p className="text-[14.5px] leading-relaxed text-muted">
                    {member.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}