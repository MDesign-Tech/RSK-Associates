"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const teamMembers = [
  {
    name: "Sarah Johnson",
    title: "Chief Executive Officer",
    bio: "15+ years of experience in financial consulting and business strategy.",
    image: "/professional-woman-headshot.png",
  },
  {
    name: "Michael Chen",
    title: "Head of Audit",
    bio: "Certified Public Accountant with expertise in regulatory compliance and auditing.",
    image: "/professional-man-headshot.png",
  },
  {
    name: "Emma Williams",
    title: "Tax Advisory Director",
    bio: "Specialist in tax planning and optimization for businesses of all sizes.",
    image: "/professional-woman-executive-headshot.png",
  },
  {
    name: "David Rodriguez",
    title: "Senior Consultant",
    bio: "Expert in business management and strategic growth initiatives.",
    image: "/professional-woman-headshot-2.png",
  },
]

export function OurTeam() {
  return (
    <section id="our-team" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-display mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the experienced professionals who deliver exceptional results for our clients.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative mb-4 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-2">{member.title}</p>
                {/* <p className="text-sm text-muted-foreground">{member.bio}</p> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
