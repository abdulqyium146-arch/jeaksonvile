const stats = [
  { value: "184+", label: "5-Star Reviews" },
  { value: "10+", label: "Years in Jacksonville" },
  { value: "24/7", label: "Emergency Availability" },
  { value: "20–30 min", label: "Average Response Time" },
]

export default function StatsSection() {
  return (
    <section className="py-16 bg-yellow-400">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-black">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-black">{value}</p>
              <p className="text-sm font-semibold mt-1 opacity-80">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
