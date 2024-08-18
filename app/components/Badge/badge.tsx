/**
 * @fileoverview Badge component
 * This component is used to display a badge with a variant and color.
 * variants: soft, solid, surface, outline
 * colors: default, destructive, success, warning, info
 * tempalte:
 *  <Badge variant="soft" color="destructive">
 *    Destructive
 *  </Badge>
 * @file app/components/ui/Badge/badge.tsx
 */

import { cva, type VariantProps } from "class-variance-authority";

import type { DOMAttributes } from "hono/jsx";
import { cn } from "~/lib/utils";

/**
 * `badgeVariants` defines the different styles and variants for the Badge component.
 * It uses `class-variance-authority` to manage the styles based on the provided variants and compound variants.
 */
const badgeVariants = cva(
	"inline-flex items-center rounded-sm px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
	{
		variants: {
			variant: {
				soft: "bg-muted text-muted-is-default",
				solid: "bg-solid text-solid-is-default",
				surface:
					"bg-surface text-surface-is-default border border-surface-border",
				outline: "border border-outline text-outline-is-default",
			},
			color: {
				default: "",
				destructive: "",
				success: "",
				warning: "",
				info: "",
			},
		},
		compoundVariants: [
			// Soft variants
			{
				variant: "soft",
				color: "destructive",
				class: "bg-destructive text-destructive-is-default",
			},
			{
				variant: "soft",
				color: "success",
				class: "bg-success text-success-is-default",
			},
			{
				variant: "soft",
				color: "warning",
				class: "bg-warning text-warning-is-default",
			},
			{
				variant: "soft",
				color: "info",
				class: "bg-info text-info-is-default",
			},
			// Solid variants
			{
				variant: "solid",
				color: "destructive",
				class: "bg-destructive-is-solid text-destructive-foreground",
			},
			{
				variant: "solid",
				color: "success",
				class: "bg-success-is-solid text-success-is-default",
			},
			{
				variant: "solid",
				color: "warning",
				class: "bg-warning-is-solid text-warning-is-default",
			},
			{
				variant: "solid",
				color: "info",
				class: "bg-info-is-default text-info hover:bg-info-is-default",
			},
			// Surface variants
			{
				variant: "surface",
				color: "destructive",
				class: "bg-destructive border-destructive text-destructive-is-default",
			},
			{
				variant: "surface",
				color: "success",
				class: "bg-success border-success text-success-is-default",
			},
			{
				variant: "surface",
				color: "warning",
				class: "bg-warning border-warning text-warning-is-default",
			},
			{
				variant: "surface",
				color: "info",
				class: "bg-info border-info text-info-is-default",
			},
			// Outline variants
			{
				variant: "outline",
				color: "destructive",
				class:
					"border-destructive text-destructive-is-default hover:bg-destructive",
			},
			{
				variant: "outline",
				color: "success",
				class: "border-success text-success-is-default hover:bg-success",
			},
			{
				variant: "outline",
				color: "warning",
				class: "border-warning text-warning-is-default hover:bg-warning",
			},
			{
				variant: "outline",
				color: "info",
				class: "border-info text-info-is-default hover:bg-info",
			},
		],
		defaultVariants: {
			variant: "soft",
			color: "default",
		},
	},
);

type BadgeVariantProps = VariantProps<typeof badgeVariants>;

/**
 * BadgeProps interface extends the standard HTML attributes for a div element,
 * excluding the "color" attribute, and adds optional "variant" and "color" properties.
 */
export type BadgeProps = Omit<DOMAttributes, "color"> & BadgeVariantProps;

/**
 * Badge component renders a styled badge element.
 * @param {BadgeProps} props - The properties for the Badge component.
 * @param {string} [props.className] - Additional class names to apply to the badge.
 * @param {string} [props.variant] - The variant of the badge (e.g., "soft", "solid").
 * @param {string} [props.color] - The color of the badge (e.g., "default", "destructive").
 * @returns {JSX.Element} The rendered badge element.
 */
function Badge({ className, variant, color, ...props }: BadgeProps) {
	return (
		<div
			className={cn(badgeVariants({ variant, color }), className)}
			{...props}
		/>
	);
}

export { Badge, badgeVariants };
