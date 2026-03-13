export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const variants = {
    primary: "btn--primary",
    outline: "btn--outline",
    secondary: "btn--secondary",
    icon: "btn--icon",
    filter: "filter-btn",
  };
  const sizes = {
    sm: "btn--sm",
    md: "btn--md",
    lg: "btn--lg",
  };
  const classes = ["btn", variants[variant], sizes[size], className]
    .filter(Boolean)
    .join(" ");
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
