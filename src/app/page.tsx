import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4" style={{
        backgroundImage: 'url(/images/desert-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <img src="/images/banner.jpg" alt="Future's Relic Banner" className="mx-auto mb-8 max-w-full h-auto rounded-lg shadow-2xl" />
          <p className="text-accent uppercase tracking-wide mb-4 text-lg">An NFT Filmmaking Experience</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Future's <span className="text-primary">Relic</span>
          </h1>
          <p className="text-xl text-gray-300">WAX Blockchain</p>
        </div>
      </section>

      {/* Help Wanted Section */}
      <section id="internship" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-accent uppercase tracking-wide mb-4">Help Wanted</h3>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Editing Interns Wanted!</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                We have received numerous film pieces from an abandoned film set in the desert, and we need dedicated
                interns to help us organize and restore this precious footage. If you are ready to dive into the world
                of film editing and contribute to this exciting project, start your journey here.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-4 my-6 italic bg-gray-800 p-6 rounded">
                <p className="font-bold mb-2">Help Wanted: Film Editing Interns</p>
                <p className="mb-4">
                  <strong>Future's Relic</strong> is looking for any able-bodied film editing interns. We are expecting
                  a lot of footage very soon. We will provide you with training.
                </p>
                <p className="font-bold mb-2">What's expected of our interns?</p>
                <ul className="list-disc list-inside space-y-1 mb-4">
                  <li>Organize and sift through the pieces</li>
                  <li>Get to know the footage</li>
                  <li>Gather the tools and markers</li>
                  <li>Assemble matching pieces</li>
                </ul>
                <p>Sign up today. We will call upon you once the work begins.</p>
              </blockquote>
            </div>
            <a
              href="https://neftyblocks.com/collection/futuresrelic/packs/atomicpacksx/3812"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-8 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Unpack Here
            </a>
          </div>
          <div className="bg-gray-800 rounded-lg p-8">
            <div className="aspect-video bg-gray-700 rounded mb-4 flex items-center justify-center">
              <p className="text-gray-500">NeftyBlocks Drop Embed</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Internship Section */}
      <section className="py-20 px-4 bg-dark">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center">
              <span className="text-4xl">🏺</span>
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Internship</h2>
          <h4 className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            As an Intern, you are to learn your way around our facilities and to prepare studio instruments into production instruments.
          </h4>
          <div className="space-y-2 text-gray-300 max-w-2xl mx-auto">
            <p>Begin by unpacking an intern package.</p>
            <p>Then, complete the intern tasks.</p>
            <p>Stack leftover documents.</p>
            <p>Finally, participate in the recycling plan.</p>
          </div>
        </div>
      </section>

      {/* Intern Cards Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Intern Card */}
            <InternCard
              title="Intern Card"
              subtitle="with punched holes"
              description="New Interns receive an Intern Card. Each time you complete an Intern Task, a hole will be punched in your card. Once your card has four punched holes, you can exchange it for an Intern Editor card."
              dropLink="https://neftyblocks.com/collection/futuresrelic/drops/123480"
              image="/images/intern-card-front-00.png"
            />

            {/* Intern Editor Card */}
            <InternCard
              title="Intern Editor Card"
              description="This card allows you to perform basic editing."
              dropLink="https://neftyblocks.com/collection/futuresrelic/drops/30594"
              image="/images/intern-card-front-01.png"
            />

            {/* Hired Card */}
            <InternCard
              title="Hired!"
              description="Blend this card to activate it as an ID Card: Editor on Payroll. This will get you on the Payroll, allowing you to earn Wax Seals and crEDITs every week. You can also claim a weekly schedule, which has a 1% chance of including a Training Day for aspiring Jerryriggers."
              dropLink="https://neftyblocks.com/collection/futuresrelic/drops/80263"
              image="/images/intern-card-front-02.png"
            />

            {/* ID Card */}
            <InternCard
              title="ID Card: Editor on Payroll"
              subtitle="Apple Office lead Speaker"
              description="ID Card: Editor on Payroll. This will get you on the Payroll, allowing you to earn Wax Seals and crEDITs every week. You can also claim a weekly schedule, which has a 1% chance of including a Training Day for aspiring Jerryriggers."
              dropLink="https://neftyblocks.com/collection/futuresrelic/drops/78114"
              image="/images/intern-card-front-03.png"
            />
          </div>
        </div>
      </section>

      {/* Canisters Section */}
      <section id="canisters" className="py-20 px-4 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Canisters</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              These Canisters were sent via crates by Mr. Curious, which he donated to Future's Relic.
              These canisters contain pieces of a film that were found out in the desert, and we are going to need your help!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Film Box */}
            <CanisterCard
              title="Film Box"
              subtitle="from the First Location"
              price="6"
              chapters="Chapters 0 & 1"
              features={[
                'Triple Canister - 72 NFTs',
                'Single Canister - 24 NFTs',
                'Film Box - 6 NFTs'
              ]}
              link="https://neftyblocks.com/collection/futuresrelic/blends/blend.nefty/12467"
              image="/images/Film-Box.png"
            />

            {/* Small Canister */}
            <CanisterCard
              title="Small Canister"
              subtitle="from the Second Location"
              price="8"
              chapters="Chapters 2, 3, 4 & 5"
              features={[
                'Triple Canister - 72 NFTs',
                'Single Canister - 24 NFTs',
                'Small Canister - 8 NFTs'
              ]}
              link="https://neftyblocks.com/collection/futuresrelic/blends/blend.nefty/12466"
              image="/images/Small-Canister.png"
            />

            {/* Film Case */}
            <CanisterCard
              title="Film Case"
              subtitle="from the Third Location"
              price="7"
              chapters="Chapters 6 & 7"
              features={[
                'Triple Canister - 72 NFTs',
                'Single Canister - 24 NFTs',
                'Film Case - 7 NFTs'
              ]}
              link="https://neftyblocks.com/collection/futuresrelic/blends/blend.nefty/37407"
              image="/images/Triple-Canisters.png"
            />
          </div>
        </div>
      </section>

      {/* Taco Venue Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-dark to-gray-900">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <a href="https://app.tacocrypto.io/brigade" className="text-accent hover:text-primary transition-colors">
              taco venue
            </a>
          </h2>
          <p className="text-xl text-gray-300 mb-12">Join the Future's Relic Snack Bar's Brigade!</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">Future's Relic Snack Bar</h3>
              <p className="text-gray-300 mb-4">Choose Taco Venue</p>
              <p className="text-accent font-bold">JOIN THE BRIGADE</p>
              <p className="text-sm text-gray-400 mt-2">Run Brigade - Earn Shing</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">EXECUTE</h3>
              <p className="text-gray-300">Earn SHING every time you <strong>execute</strong> a Brigade!</p>
            </div>

            <div className="bg-gray-800 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-4">NFT Giveaway</h3>
              <p className="text-gray-300 mb-4">
                Future's Relic Snack Bar offer 18 NFTs randomly assigned to those who run the brigade everyday!
              </p>
              <p className="text-accent font-bold mt-4">Stake Taco</p>
              <p className="text-sm text-gray-400">Stake Taco to increase the SHING payout per executed run!</p>
            </div>
          </div>

          <a
            href="https://waxdao.io/farm/frshingfarm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-12 px-8 py-3 bg-accent text-dark font-bold rounded-lg hover:bg-primary hover:text-white transition-colors"
          >
            Visit WaxDAO Farm
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-100 mb-8">
            Join the Future's Relic community and help restore this incredible film project!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://neftyblocks.com/collection/futuresrelic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors"
            >
              View Collection
            </a>
            <a
              href="https://discord.gg/EAgsTRhZpA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-dark text-white font-bold rounded-lg hover:bg-gray-900 transition-colors"
            >
              Join Discord
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

// Component for Intern Cards
function InternCard({ title, subtitle, description, dropLink, image }: {
  title: string
  subtitle?: string
  description: string
  dropLink: string
  image: string
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-[3/4] bg-gray-700 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        {subtitle && <p className="text-sm text-gray-400 mb-4">{subtitle}</p>}
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <a
          href={dropLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-4 py-2 bg-accent text-dark font-bold rounded hover:bg-primary hover:text-white transition-colors"
        >
          Get Card
        </a>
      </div>
    </div>
  )
}

// Component for Canister Cards
function CanisterCard({ title, subtitle, price, chapters, features, link, image }: {
  title: string
  subtitle: string
  price: string
  chapters: string
  features: string[]
  link: string
  image: string
}) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className="aspect-square bg-gray-700 flex items-center justify-center overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{subtitle}</p>
        <div className="text-center mb-4">
          <span className="text-4xl font-bold text-accent">{price}</span>
          <span className="text-sm text-gray-400 ml-2">crEDIT$</span>
        </div>
        <div className="space-y-2 mb-6">
          <p className="text-sm text-gray-300">{chapters}</p>
          {features.map((feature, idx) => (
            <p key={idx} className="text-sm text-gray-400">• {feature}</p>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center px-4 py-2 bg-accent text-dark font-bold rounded hover:bg-primary hover:text-white transition-colors"
        >
          Get a {title}
        </a>
      </div>
    </div>
  )
}
