import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Blogs() {
  return (
    <section id="blogs" className="relative max-w-7xl mx-auto mb-3 mt-32 text-white">
        <div className="p-4 text-4xl break-words bg-linear-to-r from-white to-slate-500 inline-block text-transparent bg-clip-text mb-4">
          Blogs
        </div>
        <div className="lg:grid lg:grid-cols-3 gap-4">
            <div className="lg:px-0 px-4 lg:py-0 py-4 cursor-pointer">
                <div className="max-w-full rounded overflow-hidden">
                <Link href="https://johnmikoacuesta.github.io/branding-vs-marketing">
                    <Image className="rounded-lg transition duration-500 ease-in-out hover:scale-103" src="/blogs/blog-box-1.png" alt="Branding vs. Marketing" width={0} height={0}  style={{ width: '100%', height: 'auto' }} unoptimized={true}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Branding vs. Marketing</div>
                        <p className="text-white text-base opacity-70 line-clamp-3">
                            Think of your brand as your personality. It's that gut feeling people get when they think of your business. It's the "vibe," the "why," the "what makes you, you?" It's not just a logo or a catchy slogan;
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#BrandStrategy</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Marketing101</span>
                    </div>
                </Link>
                </div>
            </div>
            <div className="lg:px-0 px-4 lg:py-0 py-4 cursor-pointer">
                <div className="max-w-full rounded overflow-hidden">
                <Link href="https://johnmikoacuesta.github.io/branding-vs-marketing">
                    <Image className="rounded-lg transition duration-500 ease-in-out hover:scale-103" src="/blogs/blog-box-1.png" alt="Branding vs. Marketing" width={0} height={0}  style={{ width: '100%', height: 'auto' }} unoptimized={true}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Branding vs. Marketing</div>
                        <p className="text-white text-base opacity-70 line-clamp-3">
                            Think of your brand as your personality. It's that gut feeling people get when they think of your business. It's the "vibe," the "why," the "what makes you, you?" It's not just a logo or a catchy slogan;
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#BrandStrategy</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Marketing101</span>
                    </div>
                </Link>
                </div>
            </div>
            <div className="lg:px-0 px-4 lg:py-0 py-4 cursor-pointer">
                <div className="max-w-full rounded overflow-hidden">
                <Link href="https://johnmikoacuesta.github.io/branding-vs-marketing">
                    <Image className="rounded-lg transition duration-500 ease-in-out hover:scale-103" src="/blogs/blog-box-1.png" alt="Branding vs. Marketing" width={0} height={0}  style={{ width: '100%', height: 'auto' }} unoptimized={true}/>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">Branding vs. Marketing</div>
                        <p className="text-white text-base opacity-70 line-clamp-3">
                            Think of your brand as your personality. It's that gut feeling people get when they think of your business. It's the "vibe," the "why," the "what makes you, you?" It's not just a logo or a catchy slogan;
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#BrandStrategy</span>
                        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Marketing101</span>
                    </div>
                </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Blogs