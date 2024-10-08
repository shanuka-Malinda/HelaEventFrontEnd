"use client";

const features = [
    {
        name: 'Post Events Easily',
        description:
            'Create and manage events for traditional dancers, musicians, and drama teams effortlessly. Share your event with the community.',
        icon: '📅',
    },
    {
        name: 'Secure Bookings',
        description:
            'Ensure safe and hassle-free bookings for events with verified participants and providers, ensuring a smooth event experience.',
        icon: '🔒',
    },
    {
        name: 'Customizable Profiles',
        description:
            'Artists and event providers can build detailed profiles showcasing their talents, ensuring better visibility for traditional performances.',
        icon: '🎭',
    },
    {
        name: 'Connect with Providers',
        description:
            'Easily find and connect with traditional event providers like dancers, musicians, and drama teams, bringing authenticity to your events.',
        icon: '🤝',
    },
];

const Feature: React.FC = () => {
    return (
        <div className="bg-black py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-gray-400">Celebrate Tradition</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                        Everything you need to manage traditional events
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-400">
                        Discover and manage a variety of traditional events, from cultural performances to local festivals. Join hands with talented performers to make your event unforgettable.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-white">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-700">
                                        <span className="text-2xl text-white">{feature.icon}</span>
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-400">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}

export default Feature;
