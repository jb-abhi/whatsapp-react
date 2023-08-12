export const NavItems = 
		[
			{
				icon: './Whatsapp-Dashboard.svg',
				name: "Dashboard",
				link: "/dashboard",
				childRoutes: [],
			},
			{
				icon: './Whatsapp-Contacts.svg',
				name: "Contacts",
				childRoutes: [
					{
						name: "CRM Contacts",
						link: "/crm",
					},
					{
						name: "CRM Contacts",
						link: "/contacts",
					},
				],
			},
			{
				icon: './Whatsapp-Messages.svg',
				name: "Messages",
				childRoutes: [
					{
						name: "Overview",
						link: "/overview",
					},
					{
						name: "Send bulk messages",
						link: "/broadcast",
					},
					{
						name: "Chats",
						link: "/chats",
					},
				],
			},
			{
				icon: './Whatsapp-Templates.svg',
				name: "Templates",
				link: "/templates",
				childRoutes: [],
			},
			{
				icon: './Whatsapp-Sent.svg',
				name: "Sent",
				link: "/sent",
				childRoutes: [],
			},
			{
				icon: './Whatsapp-ProfileSettings.svg',
				name: "Account Details",
				link: "/account-details",
				childRoutes: [],
			},
		]

