"use client"
import React from 'react'
import Image from 'next/image'
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarShortcut, MenubarTrigger, } from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger, } from "@/components/ui/sheet"
import Link from "next/link"

export const Navbar = () => {
    return (
        <nav className='flex lg:flex-row lg:justify-between items-center lg:px-8 lg:px-5 px-1 fixed left-0 w-full z-50' style={{ background: 'linear-gradient(81deg,rgba(15, 7, 22, 1) 35%, rgba(9, 9, 121, 1) 99%)' }}>
            <div className='flex w-full lg:w-auto lg:justify-start justify-between items-center'>
                <div className="flex justify-between items-center py-10">
                    <a className='text-base hover:bg-blue-200 p-2 transition delay-50 duration-200 hover:text-[#0A0A0A] lg:shadow rounded-full' href='mailto:kusaraswati45a@gmail.com'><span className='me-2 rounded-full lg:shadow lg:bg-white px-2 lg:text-lg text-2xl py-[5px] lg:text-[#0A0A0A] text-white'><i className="ri-mail-send-fill"></i></span><span className='lg:inline hidden'>kusaraswati45a@gmail.com</span></a>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button className='bg-transparent lg:hidden text-white text-2xl px-3'><i className="ri-menu-3-line"></i></Button>
                        </SheetTrigger>
                        <SheetContent>
                            <SheetHeader className='border-b'>
                                <SheetTitle>About me</SheetTitle>
                                <SheetDescription className='text-gray-600 mb-0'>
                                    Motivated developer with strong problem-solving skills, quick adaptability, and a focus on clean, user-centered solutions.
                                </SheetDescription>
                            </SheetHeader>
                            <Menubar className='flex-col w-full pt-0'>
                                <MenubarMenu>
                                    <MenubarTrigger className='capitalize w-full'><i className="ri-user-search-line me-2"></i>about me</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem className='capitalize'>
                                            know me<MenubarShortcut><i className="ri-arrow-right-double-fill text-base text-white"></i></MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem className='capitalize'>
                                            my qualification <MenubarShortcut><i className="ri-graduation-cap-line text-base text-white"></i></MenubarShortcut>
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className='capitalize w-full'><i className="ri-list-settings-line me-2"></i>projects</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem className='capitalize'>
                                            frontend <MenubarShortcut><i className="ri-shapes-line text-white text-base"></i></MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem className='capitalize'>
                                            backend <MenubarShortcut><i className="ri-code-block text-white text-base"></i></MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarSeparator />
                                        <MenubarItem className='capitalize'>
                                            all projects <MenubarShortcut><i className="ri-list-indefinite text-white text-base"></i></MenubarShortcut>
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className='capitalize w-full'><i className="ri-coreos-line me-2"></i>works</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem className='capitalize'>
                                            current <MenubarShortcut><i className="ri-bar-chart-box-ai-line text-base text-white"></i></MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem className='capitalize'>
                                            previous <MenubarShortcut><i className="ri-community-line text-base text-white"></i></MenubarShortcut>
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                                <MenubarMenu>
                                    <MenubarTrigger className='capitalize w-full'><i className="ri-headphone-line me-2"></i>contact</MenubarTrigger>
                                    <MenubarContent>
                                        <MenubarItem className='capitalize'>
                                            message me <MenubarShortcut><i className="ri-chat-smile-3-line text-base text-white"></i></MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem className='capitalize'>
                                            whatsapp me <MenubarShortcut><i className="ri-whatsapp-line text-base text-white"></i></MenubarShortcut>
                                        </MenubarItem>
                                        <MenubarItem className='capitalize'>
                                            call me <MenubarShortcut><i className="ri-phone-line text-base text-white"></i></MenubarShortcut>
                                        </MenubarItem>
                                    </MenubarContent>
                                </MenubarMenu>
                            </Menubar>
                            <SheetFooter className='mb-5'>
                                <SheetClose asChild>
                                    <Button className='hover:bg-[#693dc3] hover:text-white delay-50 transition duration-300 ease-in-out py-4'>
                                        <Link href="/hire-me" className='capitalize text-base'>hire me</Link>
                                    </Button>
                                </SheetClose>
                            </SheetFooter>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
            <div className='lg:flex flex-row hidden items-center justify-end'>
                <Menubar className='me-8'>
                    <MenubarMenu>
                        <MenubarTrigger className='capitalize'><i className="ri-user-search-line me-2"></i>about me</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className='capitalize'>
                                know me<MenubarShortcut><i className="ri-arrow-right-double-fill text-base text-white"></i></MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem className='capitalize'>
                                my qualification <MenubarShortcut><i className="ri-graduation-cap-line text-base text-white"></i></MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='capitalize'><i className="ri-list-settings-line me-2"></i>projects</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className='capitalize'>
                                frontend <MenubarShortcut><i className="ri-shapes-line text-white text-base"></i></MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem className='capitalize'>
                                backend <MenubarShortcut><i className="ri-code-block text-white text-base"></i></MenubarShortcut>
                            </MenubarItem>
                            <MenubarSeparator />
                            <MenubarItem className='capitalize'>
                                all projects <MenubarShortcut><i className="ri-list-indefinite text-white text-base"></i></MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='capitalize'><i className="ri-coreos-line me-2"></i>works</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className='capitalize'>
                                current <MenubarShortcut><i className="ri-bar-chart-box-ai-line text-base text-white"></i></MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem className='capitalize'>
                                previous <MenubarShortcut><i className="ri-community-line text-base text-white"></i></MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                    <MenubarMenu>
                        <MenubarTrigger className='capitalize'><i className="ri-headphone-line me-2"></i>contact</MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem className='capitalize'>
                                message me <MenubarShortcut><i className="ri-chat-smile-3-line text-base text-white"></i></MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem className='capitalize'>
                                whatsapp me <MenubarShortcut><i className="ri-whatsapp-line text-base text-white"></i></MenubarShortcut>
                            </MenubarItem>
                            <MenubarItem className='capitalize'>
                                call me <MenubarShortcut><i className="ri-phone-line text-base text-white"></i></MenubarShortcut>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
                <Button className='hover:bg-[#693dc3] hover:text-white delay-50 transition duration-300 ease-in-out py-4'>
                    <Link href="/hire-me" className='capitalize text-base'>hire me<i className="ri-sticky-note-add-line ms-2"></i></Link>
                </Button>
            </div>
        </nav>
    )
}
