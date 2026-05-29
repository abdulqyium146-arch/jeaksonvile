import { Star } from "lucide-react"

const reviews = [
  {
    name: "Marcus T.",
    rating: 5,
    text: "Called at 11pm when I locked my keys in my car outside a restaurant in San Marco. The tech arrived in about 25 minutes and had me in within a few minutes. Great service.",
    source: "Google",
  },
  {
    name: "Diane H.",
    rating: 5,
    text: "Just moved into a new house and wanted to rekey all the locks. Jax Lock Key came out the same day, rekeyed 4 locks, and gave me new keys. Fast, professional, and reasonably priced.",
    source: "Google",
  },
  {
    name: "Robert K.",
    rating: 5,
    text: "Our office got locked out on a Saturday morning. They showed up within 30 minutes, got us in without any damage. Will use again for all our commercial locksmith needs.",
    source: "Google",
  },
  {
    name: "Tamara S.",
    rating: 5,
    text: "Had a safe that I couldn't open — forgot the combination after years of not using it. The technician was knowledgeable and got it open without drilling. Highly recommend.",
    source: "Google",
  },
  {
    name: "Javier M.",
    rating: 5,
    text: "Needed a transponder key programmed for my truck. Dealer wanted $300. Jax Lock Key did it for much less, came to my location, and it was done in 20 minutes. Excellent.",
    source: "Google",
  },
  {
    name: "Crystal W.",
    rating: 5,
    text: "Locked out of my apartment at 2am. They were here in under 30 minutes and were very professional. Pricing was fair and upfront. Couldn't be happier.",
    source: "Google",
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  )
}

export default function ReviewSlider() {
  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-white">What Jacksonville Customers Say</h2>
          <p className="mt-4 text-zinc-400">Real reviews from real customers across Jacksonville, FL</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="rounded-2xl border border-white/10 bg-zinc-900 p-6 flex flex-col gap-4"
            >
              <StarRating count={review.rating} />
              <p className="text-zinc-300 text-sm leading-relaxed">"{review.text}"</p>
              <div className="mt-auto flex items-center justify-between">
                <p className="font-semibold text-white text-sm">{review.name}</p>
                <span className="text-xs text-zinc-500">{review.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
