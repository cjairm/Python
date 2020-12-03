import { useCallback } from "react";

export const useCRUD = (domain: string) =>
	useCallback(
		(source: string) => {
			const url = domain + source;

			return {
				list: async () => {
					const response = await fetch(url, {
						method: "GET",
						headers: {
							"Content-Type": "application/json"
						}
					});
					const resp = await response.json();
					return resp;
				},
				create: async (data: { [key: string]: any }) => {
					const response = await fetch(url, {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					});
					const resp = await response.json();
					return resp;
				},
				update: async (data: { [key: string]: any }) => {
					const response = await fetch(url, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					});
					const resp = await response.json();
					return resp;
				},
				remove: async () => {
					await fetch(url, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					return true;
				}
			};
		},
		[domain]
	);
