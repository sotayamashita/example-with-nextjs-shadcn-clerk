"use client";

import { Button } from "@/components/ui/button";
import {
	UserButton,
	SignOutButton,
	OrganizationSwitcher,
	OrganizationList,
} from "@clerk/nextjs";
import { HomeIcon, User2Icon } from "lucide-react";

export default function Home() {
	return (
		<div className="p-4">
			<h1 className="mt-4">User</h1>
			<h2 className="mt-4">UserButton</h2>
			<UserButton afterSignOutUrl="/" />

			<h2 className="mt-4">SignOutButton</h2>
			<SignOutButton>
				<Button variant="outline">Sign out</Button>
			</SignOutButton>

			<h1 className="mt-4">Organizations</h1>
			<h2 className="mt-4">Switcher</h2>
			<OrganizationSwitcher hidePersonal={true} />

			<h2 className="mt-4">List</h2>
			<OrganizationList
				hidePersonal={true}
				afterCreateOrganizationUrl="/organization/:slug"
				afterSelectOrganizationUrl="/organization/:slug"
			/>
		</div>
	);
}
