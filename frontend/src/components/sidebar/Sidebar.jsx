import React from "react";
import {Link} from "react-router-dom";

function Sidebar() {
	const routes = [
		{
			path: "/app/products",
			element: () => <div />,
			name: "Products",
		},
		{
			path: "/app/history",
			element: () => <div />,
			name: "History",
		},
		{
			path: "/app/users",
			element: () => <div />,
			name: "Users",
		},
	];
	return (
		<aside className="relative z-10 flex flex-wrap items-center justify-between bg-white py-4 px-6 shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto">
			{/* <div className="mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch">
				<ul className="h-screen w-64" aria-label="Sidebar">
					<div className="overflow-y-auto rounded bg-gray-50 py-4 px-3 dark:bg-gray-800">
						<div className="space-y-2">
							{routes.map((route, index) => (
								<li key={index}>
									<Link
										className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
										to={route.path}>
										<svg
											className="h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg">
											<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
										</svg>
										<span className="ml-3 flex-1 whitespace-nowrap">
											{route.name}
										</span>
										<span className="ml-3 inline-flex items-center justify-center rounded-full bg-gray-200 px-2 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-300">
											Pro
										</span>
									</Link>
								</li>
							))}
						</div>
					</div>
				</ul>
			</div> */}
		</aside>
	);
}

export default Sidebar;
