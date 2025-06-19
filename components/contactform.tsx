"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "./ui/textarea";

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

export default function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                        <FormItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <FormControl>
                                    <Input placeholder="First Name" className="py-5" {...field} />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder="Last Name" className="py-5" {...field} />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder="Email" className="py-5" {...field} />
                                </FormControl>
                                <FormControl>
                                    <Input placeholder="Phone Number" className="py-5" {...field} />
                                </FormControl>
                            </div>
                            <Textarea className="mt-3" />
                        </FormItem>
                    )}
                />
                <Button type="submit" className="px-8 cursor-pointer text-base">Submit</Button>
            </form>
        </Form>
    );
}
