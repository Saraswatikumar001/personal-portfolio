"use client"
import { Button } from "@/components/ui/button";
import Image from "next/image";
import * as motion from "motion/react-client"
import { animate, useMotionValue, useTransform } from "motion/react"
import { useEffect } from "react"
import Autoplay from "embla-carousel-autoplay"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, } from "@/components/ui/accordion"
import {
  Menubar, MenubarMenu, MenubarTrigger,
} from "@/components/ui/menubar"
import { Card, CardHeader, CardTitle, CardContent, CardDescription, } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel"
import Link from "next/link";
import ContactForm from "@/components/contactform";


export default function Home() {
  const count1 = useMotionValue(0)
  const rounded1 = useTransform(() => Math.round(count1.get()))

  const count2 = useMotionValue(0)
  const rounded2 = useTransform(count2, latest => Math.round(latest))

  const count3 = useMotionValue(0)
  const rounded3 = useTransform(count3, latest => latest.toFixed(1))

  const count4 = useMotionValue(0)
  const rounded4 = useTransform(count4, latest => `${Math.round(latest)}k`)

  useEffect(() => {
    const controls = [
      animate(count1, 10, { duration: 2 }),
      animate(count2, 8, { duration: 2 }),
      animate(count3, 1, { duration: 2 }),
      animate(count4, 2, { duration: 2.5 }),
    ]
    return () => controls.forEach(ctrl => ctrl.stop())
  }, [count1, count2, count3, count4])
  return (
    <>
      <main className="flex ma:flex-row flex-col lg:flex-row items-center justify-center lg:h-screen h-full w-full lg:px-8 px-2 gap-7 lg:pt-20 pt-40">
        <div className="lg:w-[60%] lg:pe-5 px-5">
          <h4 className="lg:text-3xl text-xl font-semibold">Hi! I am Saraswati Kumar</h4>
          <h2 className="capitalize lg:text-4xl text-2xl font-semibold lg:mt-3 mt-1">A Frontend developer</h2>
          <h2 className="capitalize lg:text-5xl text-2xl font-semibold lg:mt-3 mb-5">React + Javascript</h2>
          <p className="text-base text-wrap mb-12">I am a Frontend Developer with experience in building responsive, user-friendly interfaces using HTML, CSS, JavaScript, jQuery, Bootstrap, and React. Skilled in UI/UX, performance optimization, and cross-browser compatibility. Collaborative and detail-oriented, with a strong ability to convert design mockups into scalable, high-quality frontend solutions.</p>
          <div className="flex flex-row">
            <Button className="text-sm me-5 cursor-pointer rounded-3xl" variant="outline">Follow me on<i className="ri-arrow-right-s-line"></i></Button>
            <a href="https://www.linkedin.com/in/saraswati-kumar" target="_blank" className="me-2">
              <Button variant="outline" className="text-lg p-2 cursor-pointer rounded-3xl"><i className="ri-linkedin-box-fill"></i></Button>
            </a>
            <a href="https://github.com/saraswati7/All-JS-PROJECT" target="_blank" className="me-2">
              <Button variant="outline" className="text-lg p-2 cursor-pointer rounded-3xl"><i className="ri-github-fill"></i></Button>
            </a>
            <a href="https://www.facebook.com/share/16iVmX4Cyu/" target="_blank" className="me-2">
              <Button variant="outline" className="text-lg p-2 cursor-pointer rounded-3xl"><i className="ri-facebook-circle-fill"></i></Button>
            </a>
          </div>
        </div>
        <div className="lg:w-[40%] flex items-center justify-evenly relative lg:ps-5">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
            >
              <Image src="/images/profile.jpeg" alt="profile-image" height={250} width={250} className="rounded-2xl shadow w-full lg:w-[250px]" />
            </motion.div>
            <div className="absolute bottom-5 w-auto bg-white rounded-full left-20 px-2 py-3 animate-bounce">
              <Link href="tel:6295503700" className="text-black capitalize text-xl"><span className="px-2 font-medium py-1.5 me-2 bg-[#0A0A0A] rounded-full text-white"><i className="ri-phone-line"></i></span>contact me</Link>
            </div>
          </motion.div>
        </div>
      </main>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between items-center py-5 px-10">
        <div className="flex items-center flex-row lg:justify-start md:justify-center justify-center lg:mb-0 md:mb-5 mb-5">
          <h2 className="lg:text-6xl md:text-4xl text-4xl text-white me-2"><motion.span>{rounded1}</motion.span>+</h2>
          <p className="lg:text-lg md:text-lg text-base text-white mb-0 capitalize">corporate <br />projects</p>
        </div>
        <div className="flex items-center flex-row lg:justify-center md:justify-center justify-center lg:mb-0 md:mb-5 mb-5">
          <h2 className="lg:text-6xl md:text-4xl text-4xl text-white me-2"><motion.span>{rounded2}</motion.span>+</h2>
          <p className="lg:text-lg md:text-lg text-base text-white mb-0 capitalize">personal <br />projects</p>
        </div>
        <div className="flex items-center flex-row lg:justify-center md:justify-center justify-center lg:mb-0 md:mb-5 mb-5">
          <h2 className="lg:text-6xl md:text-4xl text-4xl text-white me-2"><motion.span>{rounded3}</motion.span>+</h2>
          <p className="lg:text-lg md:text-lg text-base text-white mb-0 capitalize">years of<br />experience</p>
        </div>
        <div className="flex items-center flex-row lg:justify-end md:justify-center justify-center">
          <h2 className="lg:text-6xl md:text-4xl text-4xl text-white me-2"><motion.span>{rounded4}</motion.span>+</h2>
          <p className="lg:text-lg md:text-lg text-base text-white mb-0 capitalize">lines of<br />production-ready code</p>
        </div>
      </section>
      <section className="py-10 mt-10 lg:px-10 px-7 bg-[#0F0716]">
        <div className="flex justify-center items-center">
          <div className="w-250">
            <h2 className="capitalize text-4xl text-center mb-4">my expertise</h2>
            <p className="text-base text-center">I specialize in building robust, scalable, and user-centric web applications using a modern tech stack. From crafting responsive frontends to developing secure and efficient backend systems, I bring ideas to life with clean, maintainable code.</p>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full mt-10 border">
          <AccordionItem value="item-1">
            <AccordionTrigger className="rounded-none py-5 lg:text-xl text-lg"><span><i className="ri-function-line me-3 bg-white text-black rounded-full p-1"></i>Frontend Development</span></AccordionTrigger>
            <AccordionContent className="mt-3 text-base px-3">
              As a frontend developer, I specialize in creating clean, responsive, and user-friendly interfaces that turn ideas into engaging digital experiences. I blend performance-focused coding with modern design principles to build websites that not only look great but also perform seamlessly across devices.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="rounded-none py-5 lg:text-xl text-lg"><span><i className="ri-file-settings-line me-3 bg-white text-black rounded-full p-1"></i>React Development</span></AccordionTrigger>
            <AccordionContent className="mt-3 text-base px-3">
              I specialize in backend development that powers modern, secure, and high-performing web applications. My focus is on creating robust server-side logic, efficient database interactions, and scalable architecture to ensure that the frontend experience is seamless and reliable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="rounded-none py-5 lg:text-xl text-lg"><span><i className="ri-stackshare-line me-3 bg-white text-black rounded-full p-1"></i>API Development</span></AccordionTrigger>
            <AccordionContent className="mt-3 text-base px-3">
              I specialize in developing clean, secure, and scalable APIs that connect web and mobile applications to the backend efficiently. My experience with RESTful API design ensures smooth communication between client and server, enabling high-performance, modern web apps.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="lg:px-10 md:px-9 px-7 py-10">
        <h2 className="text-4xl text-center capitalize mb-12">my recent works</h2>
        <Menubar className="items-center justify-center w-full overflow-scroll lg:overflow-visible">
          <MenubarMenu>
            <MenubarTrigger className="capitalize text-base px-4"><i className="ri-list-radio me-2"></i>all</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="capitalize text-base px-4"><i className="ri-map-pin-time-line me-2"></i>current</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="capitalize text-base px-4"><i className="ri-history-line me-2"></i>past</MenubarTrigger>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger className="capitalize text-base px-4"><i className="ri-spy-line me-2"></i>personal</MenubarTrigger>
          </MenubarMenu>
        </Menubar>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-between gap-5 items-center">
          <div className="w-full border rounded-lg shadow-sm overflow-hidden">
            <div className="p-5 bg-[#0F0716]">
              <a href="https://globemedicinalcouncil.org/" target="_blank">
                <Image height={300} width={300} src="/images/medicinal.png" alt="globe-medicinal" className="rounded-lg lg:h-[300px] h-[150px] w-full hover:scale-102 duration-300 object-cover ease-in-out transition" />
              </a>
            </div>
          </div>
          <div className="w-full border rounded-lg shadow-sm overflow-hidden">
            <div className="p-5 bg-[#0F0716]">
              <a href="https://vcskilldevelopment.in/" target="_blank">
                <Image height={300} width={300} src="/images/vcsskill.png" alt="vcsskill-development" className="rounded lg:h-[300px] h-[150px] w-full hover:scale-102 duration-300 object-cover ease-in-out transition" />
              </a>
            </div>
          </div>
          <div className="w-full border rounded-lg shadow-sm overflow-hidden">
            <div className="p-5 bg-[#0F0716]">
              <a href="https://studyvidyaa.in/" target="_blank">
                <Image height={300} width={300} src="/images/studyvidya.png" alt="studyvidya" className="rounded lg:h-[300px] h-[150px] w-full hover:scale-102 duration-300 object-cover ease-in-out transition" />
              </a>
            </div>
          </div>
          <div className="w-full border rounded-lg shadow-sm overflow-hidden">
            <div className="p-5 bg-[#0F0716]">
              <a href="https://github.com/Jeet-web2026/NeoPrime" target="_blank">
                <Image height={300} width={300} src="/images/neoprime.png" alt="neoprime" className="rounded lg:h-[300px] h-[150px] w-full hover:scale-102 duration-300 object-cover ease-in-out transition" />
              </a>
            </div>
          </div>
        </div>
        <Link href="/all-works" className="flex items-center justify-center mt-10">
          <Button variant="secondary" className="text-lg py-5 capitalize px-6 cursor-pointer"><i className="ri-menu-search-line"></i>see more</Button>
        </Link>
      </section>
      <section className="lg:px-10 md:px-9 lg:px-7 px-0 pb-5 lg:pt-10">
        <div className="flex lg:flex-row flex-col">
          <div className="lg:w-[50%] w-full h-full flex justify-center items-center">
            <div className="w-full">
              <h2 className="text-center lg:text-4xl text-2xl capitalize"><i className="ri-brain-line me-2"></i>my experience</h2>
              <Card className="lg:mt-8 mt-3 px-12 bg-transparent border-none">
                <CardHeader className="bg-[#1a0b26] py-5 px-5 rounded-xl shadow border-2">
                  <CardTitle className="text-[#693DC3] text-sm">March 2025 - Present</CardTitle>
                  <CardTitle className="uppercase text-base lg:text-2xl">Frontend Developer</CardTitle>
                  <CardTitle className="text-base">DIGITYX</CardTitle>
                </CardHeader>
                <CardHeader className="bg-[#1a0b26] py-5 px-5 rounded-xl shadow border-2">
                  <CardTitle className="text-[#693DC3] text-sm">April 2024 - November 2024</CardTitle>
                  <CardTitle className="uppercase text-base lg:text-2xl">Frontend developer</CardTitle>
                  <CardTitle className="text-base">DIGITYX</CardTitle>
                </CardHeader>
                <CardHeader className="bg-[#1a0b26] py-5 px-5 rounded-xl shadow border-2">
                  <CardTitle className="text-[#693DC3] text-sm">March 2023 - April 2024</CardTitle>
                  <CardTitle className="uppercase text-base lg:text-2xl">Adminstrative assistant</CardTitle>
                  <CardTitle className="text-base">M/s Solution Agency</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
          <div className="lg:w-[50%] w-full h-full lg:mt-0 mt-3 flex justify-center items-center">
            <div className="w-full">
              <h2 className="text-center lg:text-4xl text-2xl capitalize"><i className="ri-graduation-cap-line me-2"></i>my education</h2>
              <Card className="lg:mt-8 mt-3 px-12 bg-transparent border-none">
                <CardHeader className="bg-[#1a0b26] py-5 px-5 rounded-xl shadow border-2">
                  <CardTitle className="text-[#693DC3] text-sm">Post Graduation</CardTitle>
                  <CardTitle className="uppercase text-base lg:text-2xl">Masters (Computer Application)</CardTitle>
                  <CardTitle className="text-base">Brainware University</CardTitle>
                </CardHeader>
                <CardHeader className="bg-[#1a0b26] py-5 px-5 rounded-xl shadow border-2">
                  <CardTitle className="text-[#693DC3] text-sm">Graduation</CardTitle>
                  <CardTitle className="uppercase text-base lg:text-2xl">Bachelor (Computer Application)</CardTitle>
                  <CardTitle className="text-base">Brainware University</CardTitle>
                </CardHeader>
                <CardHeader className="bg-[#1a0b26] py-5 px-5 rounded-xl shadow border-2">
                  <CardTitle className="text-[#693DC3] text-sm">Higher Secondary</CardTitle>
                  <CardTitle className="uppercase text-base lg:text-2xl">Class XII</CardTitle>
                  <CardTitle className="text-base">Nangi High School</CardTitle>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:px-10 md:px-9 lg:px-7 px-0 py-15 bg-[#0F0716]">
        <h2 className="text-center lg:text-4xl text-2xl capitalize"><i className="ri-shield-star-line me-2"></i>my skills</h2>
        <div className="w-full flex flex-col items-center justify-center">
          <p className="text-base text-center lg:w-[60%] mt-5 w-[85%]">The backend, I work primarily with Core PHP and Laravel, developing RESTful APIs, managing authentication systems, and handling complex business logic. I also have experience in Next.js for server-side rendering and full-stack applications.</p>
        </div>
        <div className="px-10 mt-10">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({ delay: 1500 }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-[#1A0B26] border-2">
                    <CardContent className="flex items-center justify-center">
                      <div className="w-full">
                        <span className="text-6xl text-center font-semibold"><i className="ri-html5-fill"></i></span>
                        <p className="text-base text-left uppercase mt-3">html design</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-[#1A0B26] border-2">
                    <CardContent className="flex items-center justify-center">
                      <div className="w-full">
                        <span className="text-6xl text-left font-semibold"><i className="ri-css3-fill"></i></span>
                        <p className="text-base text-left uppercase mt-3">css styling</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-[#1A0B26] border-2">
                    <CardContent className="flex items-center justify-center">
                      <div className="w-full">
                        <span className="text-6xl text-center font-semibold"><i className="ri-git-fork-line"></i></span>
                        <p className="text-base text-left uppercase mt-3">version control</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-[#1A0B26] border-2">
                    <CardContent className="flex items-center justify-center">
                      <div className="w-full">
                        <span className="text-6xl text-center font-semibold"><i className="ri-github-fill"></i></span>
                        <p className="text-base text-left uppercase mt-3">github actions</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-[#1A0B26] border-2">
                    <CardContent className="flex items-center justify-center">
                      <div className="w-full">
                        <span className="text-6xl text-left font-semibold"><i className="ri-javascript-fill"></i></span>
                        <p className="text-base text-left uppercase mt-3">Jquery, Jquery UI</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-[#1A0B26] border-2">
                    <CardContent className="flex items-center justify-center">
                      <div className="w-full">
                        <span className="text-6xl font-semibold text-left"><i className="ri-bootstrap-fill"></i></span>
                        <p className="text-base text-left uppercase mt-3">bootstrap UI </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/4">
                <div className="p-1">
                  <Card className="bg-[#1A0B26] border-2">
                    <CardContent className="flex items-center justify-center">
                      <div className="w-full">
                        <span className="text-6xl text-left font-semibold"><i className="ri-reactjs-fill"></i></span>
                        <p className="text-base text-left uppercase mt-3">react js development</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <div className="p-1">
                  <Card className="bg-[#1A0B26] border-2">
                    <CardContent className="flex items-center justify-center">
                      <div className="w-full">
                        <span className="text-6xl font-semibold text-left"><i className="ri-shapes-line"></i></span>
                        <p className="text-base text-left uppercase mt-3">responsive design</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent >
          </Carousel >
        </div >
      </section>
      <section className="lg:px-10 md:px-9 lg:px-15 px-8 lg:py-20 pt-10 pb-5">
        <div className="flex lg:flex-row flex-col items-center">
          <Card className="lg:w-1/2 lg:me-2 p-7 lg:p-10 bg-[#1A0B26]">
            <CardHeader className="lg:text-4xl text-2xl capitalize flex px-0"><i className="ri-question-answer-line me-2"></i>get in touch</CardHeader>
            <CardDescription className="text-base">Have a project or idea? start build something amazing together<br />
              — reach out today.</CardDescription>
            <ContactForm />
          </Card>
          <Card className="lg:w-1/2 lg:ms-5 bg-transparent border-0 flex justify-center items-center">
            <div>
              <Link href="tel:+916295503700" target="_blank" className="flex gap-3 items-center mb-8">
                <Button className="rounded-full px-3 mb-0 transition duration-300 ease-in-out cursor-pointer text-xl py-5.5 hover:bg-[#1A0B26] text-[#1A0B26] hover:text-white border hover:border-white"><i className="ri-phone-line"></i></Button>
                <div>
                  <p className="capitalize">phone</p>
                  <h5 className="mb-0">+91 6295503700</h5>
                </div>
              </Link>
              <Link href="https://wa.me/+916295503700" target="_blank" className="flex gap-3 items-center mb-8">
                <Button className="rounded-full px-3 mb-0 transition duration-300 ease-in-out cursor-pointer text-xl py-5.5 hover:bg-[#1A0B26] text-[#1A0B26] hover:text-white border hover:border-white"><i className="ri-whatsapp-line"></i></Button>
                <div>
                  <p className="capitalize">whatsapp</p>
                  <h5 className="mb-0">+91 6295503700</h5>
                </div>
              </Link>
              <Link href="https://maps.app.goo.gl/L3jU9tdmk8jCvDwM8" target="_blank" className="flex gap-3 items-center">
                <Button className="rounded-full px-3 mb-0 transition duration-300 ease-in-out cursor-pointer text-xl py-5.5 hover:bg-[#1A0B26] text-[#1A0B26] hover:text-white border hover:border-white"><i className="ri-map-pin-line"></i></Button>
                <div>
                  <p className="capitalize">locate me</p>
                  <h5 className="mb-0 capitalize">c-452, ramdashatti, garden reach, kolkata: 700024</h5>
                </div>
              </Link>
            </div>
          </Card>
        </div>
      </section>
      <section className="lg:px-10 gap-3 md:px-9 lg:px-15 px-0 lg:py-8 py-5 bg-[#1A0B26]">
        <div className="flex lg:flex-row flex-col justify-center items-center">
          <h5 className="capitalize text-base">copyright <i className="ri-at-fill"></i> saraswati kumar</h5>
          <h5 className="text-base mx-3 lg:mb-0">|<i className="ri-heart-2-fill mx-2 text-xl"></i>|</h5>
          <Link href="mailto:kusaraswati45a@gmail.com" className="lowercase text-base"><i className="ri-mail-open-line me-2"></i>kusaraswati45a@gmail.com</Link>
        </div>
      </section>
    </>
  );
}