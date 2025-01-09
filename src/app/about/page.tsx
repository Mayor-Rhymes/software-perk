import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const teamMembers = [
    { name: 'Gabriel Ogbera', role: 'CEO & Founder', image: '/images/gabriel.png' },
    { name: 'Olakunle Oluwamayowa Raheem', role: 'CTO', image: '/images/olakunle.png' }
];

export default function AboutPage() {
    return (
        <>
            {/* SEO Meta Tags */}
            <Head>
                <title>About NexGenesis - Innovating Digital Solutions</title>
                <meta
                    name="description"
                    content="Learn about NexGenesis, a team of developers and innovators transforming ideas into digital realities. Meet our team and discover our mission to empower businesses with innovative software solutions."
                />
                <meta name="keywords" content="About NexGenesis, tech solutions, innovative software, business growth, digital transformation" />
                <meta name="author" content="NexGenesis Team" />
                
                {/* Open Graph Metadata */}
                <meta property="og:title" content="About NexGenesis - Innovating Digital Solutions" />
                <meta
                    property="og:description"
                    content="Meet the team behind NexGenesis. Discover our journey, mission, and commitment to revolutionizing the way businesses use technology."
                />
                <meta property="og:url" content="https://nexgenesis.dev/about" />
                <meta property="og:type" content="website" />

                {/* Twitter Metadata */}
            </Head>

            <div className="min-h-screen bg-background flex flex-col gap-16 px-4 sm:px-8 md:px-16 lg:px-20 py-16">
                <section className="text-center">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-alegreya mb-6">About NexGenesis</h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        We are a passionate team of developers, designers, and innovators dedicated to transforming ideas into digital realities.
                    </p>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-alegreya font-semibold mb-4">Our Journey</h2>
                        <p className="text-gray-600 mb-4">
                            NexGenesis was founded with the goal of revolutionizing the way businesses and individuals use technology. We are a team of developers, designers, and innovators dedicated to transforming ideas into digital realities. We want to create solutions that are both functional and user-friendly, and we believe that technology can be used to solve problems in a way that is meaningful to people. 
                        </p>
                        <p className="text-gray-600">
                            Today, we continue to push the boundaries of what&apos;s possible in software development, always staying ahead of the curve in technology trends.
                        </p>
                    </div>
                    <div className="relative h-64 md:h-full">
                        {/* Image Placeholder */}
                        {/* <Image
                            src="/images/journey.png"
                            alt="NexGenesis Journey"
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                        /> */}
                    </div>
                </section>

                <section className="bg-lime-100 p-8 rounded-lg text-black">
                    <h2 className="text-3xl font-alegreya font-semibold mb-4 text-center">Our Mission</h2>
                    <p className="text-xl text-center max-w-3xl mx-auto">
                        To empower businesses and individuals with innovative software solutions that drive growth, efficiency, and success in the digital age.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-alegreya font-semibold mb-8 text-center">Meet Our Team</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="text-center">
                                {/* Team Member Image Placeholder */}
                                {/* <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={200}
                                    height={200}
                                    className="rounded-full mx-auto mb-4"
                                /> */}
                                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-gray-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="text-center bg-black text-white p-12 rounded-lg">
                    <h2 className="text-3xl font-alegreya font-semibold mb-4">Ready to bring your ideas to life?</h2>
                    <p className="text-xl mb-8">Let&apos;s create something amazing together.</p>
                    <Link href="/contact" className="bg-lime-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:bg-lime-600 transition-colors">
                        Get in Touch
                    </Link>
                </section>
            </div>
        </>
    );
}
