import React from "react";
const Home = () => {
    return (

        <div className="min-h-screen bg-white text-blqck font-sans pb-14 ">



            <nav className=" bg-gray-600 py-4 top-0 z-50 w-full ">
                <div className=" max-w-screen-3xl  px-24  flex  justify-between relative">

                    {/* Left Links */}
                    <div className="flex gap-6 text-sm font-medium ">
                        <a href="/" className="text-brand-white hover:text-brand-primary-dark transition">
                            Home
                        </a>
                        <a href="/impact" className="text-brand-white hover:text-brand-primary-dark transition">
                            Impact
                        </a>
                        <a href="/stories" className="text-brand-white hover:text-brand-primary-dark transition">
                            Stories
                        </a>
                    </div>

                    {/* Center Logo / Title */}
                    <div className=" absolute left-1/2 transform -translate-x-1/2 text-center">
                        <h1 className="text-2xl font-bold tracking-wide whitespace-nowrap"
                            style={{ color: ' black ' }} >
                            Safari of Kindness
                        </h1>
                    </div>

                    {/* Right Links */}
                    <div className="flex gap-6 text-sm  font-medium">
                        <a href="/get-involved" className="text-brand-white hover:text-brand-primary-dark transition ">
                            Get Involved
                        </a>
                        <a href="/donate" className="text-brand-white hover:text-brand-primary-dark transition">
                            Donate
                        </a>
                        <a href="/contact" className="text-brand-white hover:text-brand-primary-dark transition">
                            Contact
                        </a>
                    </div>

                </div>
            </nav>


            <section
                className="relative bg-brand-deep-black rounded-[4rem] pt-32 px-16 pb-16 my-11 mx-16 ">
                <div className="flex items-center max-w-6xl ">
                    {/* Text + Button Block */}
                    <div className="flex-1 flex flex-col justify-center ">
                        <div className="flex flex-col items-start max-w-xl mb-4 ">
                            <h1 className="text-5xl font-bold text-brand-primary-dark mb-4 ">
                                A Journey of Us
                            </h1>
                            <p className="text-lg text-brand-text-muted ">
                                Safari of Kindness is a journey of compassion rooted in Africa—walking
                                together with communities to nurture potential, restore dignity, and
                                uplift every life. We partner with institutions and individuals to
                                ensure that no one is left behind—not as beneficiaries, but as fellow
                                travelers on a shared path toward hope and opportunity.
                            </p>
                        </div>

                        {/* Button */}
                        <div className="flex justify-center  flex-1 ">
                            <button
                                className="text-white px-6 py-3 rounded-full transition bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600"
                            >
                                Join the Journey
                            </button>


                        </div>
                    </div>

                    {/* Hero Image - right side */}
                    <img
                        src="src/assets/Child looking up smiling.jpg"
                        alt="Smiling community icons"
                        className="max-w-sm rounded-[4rem] hidden lg:block "
                    />
                </div>
            </section>


            <section className="px-8 py-20 md:px-24 bg-brand-light">
                <div className="flex flex-col lg:flex-row items-center gap-12">

                    {/* Left - Text + Button */}
                    <div className="flex-1 text-left">
                        <p className="text-sm pb-4 ">Voluntererism</p>
                        <h2 className="text-5xl font-bold mb-4">How you can be Part of the Journey</h2>
                        <p className="text-lg text-brand-text-muted mb-6">
                            At Safari of Kindness, getting involved isn’t about helping the vulnerable—it's about
                            standing with one another. Whether you give your time or your resources, you’re
                            becoming part of a shared journey of hope and healing. <br /> A shared Journey of the Future
                        </p>
                        <button className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white px-6 py-3 rounded-full   transition">
                            Get Involved
                        </button>
                    </div>

                    {/* Right - Image Card */}
                    <div className="flex-1">
                        <div className="bg-gray-500 rounded-3xl shadow-lg overflow-hidden">
                            <img
                                src="src/assets/Child looking up smiling.jpg"
                                alt="People walking hand in hand"
                                className="w-full h-1/2 object-cover"
                            />
                        </div>
                    </div>

                </div>
            </section>


            {/* Sectiion three: What we do */}
            <section className="justify-center text-center py-10 mx-10">
                <p ClassName="text-sm">Programs</p>
                <h2 className="text-5xl font-bold mb-6">What We Do</h2>
                <p className="text-lg mb-12 max-w-2xl mx-auto">
                    We work with communities and local institutions to ensure that every person
                    has a chance to live a full life.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
                    {/* First Row: Two Boxes */}
                    <div className="w-full py-10  px-24 rounded-3xl bg-gray-500 flex flex-col justify-between">

                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Empowering Children</h3>
                        <p className="">
                            Education, safety, and opportunity for orphaned and vulnerable children.
                        </p>
                        <button className=
                            " self-center text-sm px-6 py-2 rounded-full border hover:bg-gray-100 transition"
                        >
                            Learn More
                        </button>
                        <img src="src/assets/Empowering-children-through-education.webp" alt="Empowering Children" className="w-12 h-12 start-right" />
                    </div>

                    <div className="w-full sm:w-[300px] md:w-[320px] p-8 rounded-2xl shadow-sm bg-gray-500 flex flex-col justify-between">
                        <img src="/images/disability.png" alt="Disability Inclusion" className="w-12 h-12 mb-6" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Disability Inclusion</h3>
                        <p className="text-gray-700">
                            Programs to restore dignity and create equitable access.
                        </p>
                        <button className=" self-center text-sm px-6 py-2 rounded-full border hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>

                    {/* Second Row*/}
                    <div className="col-span-1 md:col-span-2 w-full p-8 rounded-2xl shadow-sm bg-gray-500 flex flex-col justify-between">
                        <img src="/images/food.png" alt="Food & Shelter" className="w-12 h-12 mb-6" />
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Food & Shelter</h3>
                        <p className="text-gray-700">
                            Support for the displaced, the hungry, and those in crisis.
                        </p>
                        <button className=" self-center text-sm px-6 py-2 rounded-full border hover:bg-gray-100 transition">
                            Learn More
                        </button>
                    </div>

                </div>
            </section>



            <section className=" my-[4rem] bg-brand-grey px-4 rounded-full p-3 ">

                <div className=" flex">
                    <div className=" text-brand-green-dark mr-2">
                        Our Patners
                    </div >
                    <div className="flex">

                        <img
                            className="rounded-[4rem] mr-2 "
                            src="src\assets\WHO logo"
                            alt="WHO Logo"

                        />
                        <div className="text-brand-white">WHO</div>
                    </div>

                </div>

            </section>

            {/* FAQ */}
            <section className="bg-brand-light px-6 py-20 md:px-24">
                <h2 className="text-5xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
                <div className="space-y-6 max-w-3xl mx-auto">
                    {[
                        ["How can I volunteer?", "You can sign up via our Get Involved section and we’ll connect you to local efforts."],
                        ["Are donations tax-deductible?", "Yes, we issue donation certificates where applicable."],
                        ["How does Safari of Kindness choose its programs?", "We partner with local institutions to identify urgent needs and co-design solutions."],
                    ].map(([q, a], i) => (
                        <div key={i} className="bg-white p-4 rounded shadow">
                            <h4 className="font-semibold mb-2">{q}</h4>
                            <p className="text-gray-700">{a}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CONTACT */}
            <section className=" mx-16 my-11 rounded-[2rem] bg-gray-600  p-10 md:px-24 ">

                <h2 className="text-5xl font-bold mb-10 text-center">Walk With Us</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="font-semibold mb-2">Reach Out</h4>
                        <p>Email: hello@safari.org</p>
                        <p>Phone: +254 700 123456</p>
                        <p>Location: Nairobi, Kenya</p>
                        <div className="flex space-x-3 pt-4 mb-20">
                            <img className=""
                                src="src\assets\icons"
                                alt="In icon"
                            />
                            <img className=""
                                src="src\assets\icons"
                                alt="FB icon"
                            />
                            <img className=""
                                src="src\assets\icons"
                                alt="Insta icon"
                            />
                            <img className=""
                                src="src\assets\icons"
                                alt="WhatsApp icon"
                            />
                        </div>
                        <p className=" ">We typically respond within 3 days.</p>
                    </div>
                    <form className=" flex flex-col flex-1 p-6 rounded-[2rem] bg-gray-500 space-y-4">
                        <input className="w-full p-3 border rounded" placeholder="Your Name" />
                        <input className="w-full p-3 border rounded" type="email" placeholder="Your Email" />

                        <button className=" bg-brand-primary text-black px-6 py-2 rounded-full hover:bg-brand-primary-dark transition">
                            Send Message
                        </button>
                    </form>
                </div>

            </section>

            <section className="mx-[4rem] mt-10 ">
                <h3 className="text-center text-sm">Resources
                </h3>
                <h2 className="text-center text-3xl font-semibold mx-14">Resources  for your well being</h2>
                <p className="text-sm mx-12 text-center">A guide on ways to promote your pschological and mental well being, </p>
                <div className="flex flex-col justify-between ">
                    <div className="flex-col-1 bg-brand-grey">
                        <div className="text-center">Artical & Guide</div>
                        <button className="">
                            Explore
                        </button>
                    </div>

                </div>




            </section>

            {/* FOOTER */} //section 9
            <footer className=" mx-16 mt-10 space-y-24 ">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-6 lg:gap-10">
                    {/* Left Card */}
                    <div className=" bg-gray-500 rounded-[3rem] p-10 flex-1">

                        <h2 className=" text-2xl font-bold mb-6">Safari of Kindness</h2>
                        <div className="grid grid-cols-3 gap-4  text-sm mb-6">
                            <div className=" flex flex-col space-y-2">
                                <a href="/impact" className="text-brand-white hover:text-brand-green-dark transition">
                                    Impact
                                </a>
                                <a href="/impact" className="text-brand-white hover:text-brand-green-dark transition">
                                    Stories
                                </a>
                                <a href="/get-involved" className="text-brand-white hover:text-brand-green-dark transition">
                                    Get Involved
                                </a><a href="/donate" className="text-brand-white hover:text-brand-green-dark transition">
                                    Donate
                                </a>
                                <a href="/contact" className="text-brand-white hover:text-brand-green-dark transition">
                                    Contact
                                </a>
                            </div>
                            <div className="space-y-2">
                                <p>Instagram</p>
                                <p>Facebook</p>
                                <p>YouTube</p>
                                <p>LinkedIn</p>
                            </div>
                            <div className="space-y-2">
                                <p>Terms Of Use</p>
                                <p>Privacy Policy</p>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">&copy;{new Date().getFullYear()}. Safari of Kindness. All Rights Reserved.</p>
                    </div>

                    {/* Right Card */}
                    <div className="bg-brand-deep-black rounded-[40px] p-10 text-white flex-1 relative overflow-hidden">

                        <h3 className="text-3xl font-bold leading-tight mb-6">
                            Walk with Us to<br />
                            Nature Potential,<br />
                            Uplift Lives<br />
                            & Share Hope.
                        </h3>
                        <button className="text-white px-6 py-3 rounded-full transition bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600">
                            Join the Journey
                        </button>

                    </div>
                </div>

            </footer>
        </div>
    );
};

export default Home;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        