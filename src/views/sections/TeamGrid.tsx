'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { UserCircle } from '@phosphor-icons/react/dist/ssr'
import type { TeamMember } from '../../models/types/teamMember'
import { Container } from '../ui/Container'

interface TeamGridProps {
  members: TeamMember[]
  hasRealPhotos: boolean
}

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1]

function isPlaceholderName(name: string): boolean {
  return name.includes('[PLACEHOLDER')
}

export function TeamGrid({ members, hasRealPhotos }: TeamGridProps) {
  return (
    <section aria-labelledby="team-heading" className="py-20">
      <Container>
        <div className="mb-12">
          <p className="eyebrow text-navy/70 mb-4">Trained &amp; vetted</p>
          <h2
            id="team-heading"
            className="font-heading text-3xl sm:text-4xl font-bold leading-tight tracking-tight text-navy"
          >
            The team behind your care
          </h2>
          {!hasRealPhotos && (
            <p className="mt-3 text-sm text-ink/50 italic">
              [PLACEHOLDER — photos and names are added once the client provides them with consent]
            </p>
          )}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" role="list">
          {members.map((member, i) => {
            const placeholder = isPlaceholderName(member.name)
            return (
              <motion.li
                key={member.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: EASE }}
              >
                <article
                  className="group flex flex-col gap-5 rounded-2xl bg-white p-6 h-full ring-1 ring-blue-baby/40
                    [box-shadow:var(--shadow-card)]
                    transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
                    hover:-translate-y-1.5 hover:ring-blue-baby hover:[box-shadow:var(--shadow-card-hover)]"
                >
                  {/* Avatar — real photo if available, polished placeholder otherwise */}
                  <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-blue-pale to-blue-baby/50">
                    {member.photoUrl ? (
                      <Image
                        src={member.photoUrl}
                        alt={`Portrait of ${member.name}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                        <span
                          className="grid h-20 w-20 place-items-center rounded-full bg-white/70 ring-4 ring-white/50 backdrop-blur-sm
                            transition-transform duration-300 group-hover:scale-105"
                          aria-hidden="true"
                        >
                          {placeholder ? (
                            <UserCircle size={48} weight="duotone" className="text-navy/70" />
                          ) : (
                            <span className="font-heading text-2xl font-bold text-navy">
                              {member.name.charAt(0)}
                            </span>
                          )}
                        </span>
                        {!hasRealPhotos && (
                          <span className="text-xs text-navy/50 italic">Photo pending</span>
                        )}
                      </div>
                    )}
                  </div>

                  <div>
                    <h3 className="font-heading text-xl font-bold text-navy">{member.name}</h3>
                    <p className="eyebrow text-navy/60 mt-1 mb-3">{member.role}</p>
                    <p className="text-base text-ink/70 leading-relaxed">{member.bio}</p>
                  </div>
                </article>
              </motion.li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
