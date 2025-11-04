

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