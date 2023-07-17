---
to: <%= absPath %>/<%= h.capitalize(component_name) %>.types.ts
---
export interface <%= h.capitalize(component_name) %>Props {
	/**
	 * Property description
	 */
	label: string
}