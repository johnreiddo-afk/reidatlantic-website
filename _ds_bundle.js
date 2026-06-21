/* @ds-bundle: {"format":3,"namespace":"ReidAtlanticDesignSystem_92e79f","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"PillOutline","sourcePath":"components/buttons/PillOutline.jsx"},{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Chip","sourcePath":"components/content/Chip.jsx"},{"name":"MonoLabel","sourcePath":"components/content/MonoLabel.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"AnnouncementBar","sourcePath":"components/marketing/AnnouncementBar.jsx"},{"name":"TrustLogoStrip","sourcePath":"components/marketing/TrustLogoStrip.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"a7cc06cada28","components/buttons/PillOutline.jsx":"560d90a93ff3","components/content/Badge.jsx":"7331121e0de8","components/content/Card.jsx":"59b19a14f40e","components/content/Chip.jsx":"1adefecfe41c","components/content/MonoLabel.jsx":"6d7c2ebe38a8","components/forms/Input.jsx":"a839b2356ac9","components/marketing/AnnouncementBar.jsx":"abff183e34d8","components/marketing/TrustLogoStrip.jsx":"a442ba9500b3","ui_kits/website/App.jsx":"469702f8897b","ui_kits/website/BlogView.jsx":"1d85bc24b91b","ui_kits/website/Footer.jsx":"0f988c27079e","ui_kits/website/HomeView.jsx":"b32936857aba","ui_kits/website/Nav.jsx":"2f0dedae75f9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ReidAtlanticDesignSystem_92e79f = window.ReidAtlanticDesignSystem_92e79f || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ReidAtlantic primary action button.
 * Pill-shaped, near-black on light surfaces or white on dark.
 * Secondary variant renders as an underlined text link with no fill.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  disabled = false,
  iconRight,
  onClick,
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '10px 18px' : '12px 24px';
  const fontSize = size === 'sm' ? '14px' : '16px';
  const base = {
    fontFamily: 'var(--font-body)',
    fontWeight: 'var(--weight-medium)',
    fontSize,
    lineHeight: 1.2,
    letterSpacing: 0,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    border: 'none',
    textDecoration: 'none',
    transition: 'opacity .18s ease, background-color .18s ease',
    opacity: disabled ? 0.4 : 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--cta-fill)',
      color: 'var(--cta-text)',
      borderRadius: 'var(--radius-pill)',
      padding: pad
    },
    inverse: {
      background: 'var(--cta-fill-inverse)',
      color: 'var(--cta-text-inverse)',
      borderRadius: 'var(--radius-pill)',
      padding: pad
    },
    secondary: {
      background: 'transparent',
      color: 'var(--text-primary)',
      borderRadius: 0,
      padding: '4px 0',
      textDecoration: 'underline',
      textUnderlineOffset: '4px',
      textDecorationThickness: '1px'
    }
  };
  const styles = {
    ...base,
    ...variants[variant],
    ...style
  };
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    style: styles,
    onMouseEnter: e => {
      if (!disabled && variant !== 'secondary') e.currentTarget.style.opacity = '0.82';
    },
    onMouseLeave: e => {
      if (!disabled && variant !== 'secondary') e.currentTarget.style.opacity = '1';
    }
  }, rest), children, iconRight ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex'
    }
  }, iconRight) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/PillOutline.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Outlined pill control with transparent fill — used for research filters,
 * topic tags, and lightweight taxonomy. Toggles to a filled active state.
 */
function PillOutline({
  children,
  active = false,
  onClick,
  count,
  style,
  ...rest
}) {
  const styles = {
    fontFamily: 'var(--font-body)',
    fontSize: '14px',
    lineHeight: 1.2,
    fontWeight: 'var(--weight-medium)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '9px 16px',
    borderRadius: 'var(--radius-xl)',
    cursor: 'pointer',
    transition: 'background-color .15s ease, color .15s ease, border-color .15s ease',
    border: active ? '1px solid var(--color-near-black)' : '1px solid var(--border-default)',
    background: active ? 'var(--color-near-black)' : 'transparent',
    color: active ? 'var(--color-white)' : 'var(--text-primary)',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: styles,
    "aria-pressed": active
  }, rest), children, count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: active ? 'rgba(255,255,255,0.6)' : 'var(--text-muted)',
      fontVariantNumeric: 'tabular-nums'
    }
  }, count) : null);
}
Object.assign(__ds_scope, { PillOutline });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/PillOutline.jsx", error: String((e && e.message) || e) }); }

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small status/category badge. `coral` for warm editorial markers, `outline`
 * for soft-coral bordered labels, `neutral`/`dark` for system tags.
 */
function Badge({
  children,
  variant = 'neutral',
  style,
  ...rest
}) {
  const variants = {
    coral: {
      background: 'var(--accent-coral)',
      color: 'var(--color-near-black)',
      border: 'none'
    },
    outline: {
      background: 'transparent',
      color: 'var(--color-ink)',
      border: '1px solid var(--accent-coral-border)'
    },
    neutral: {
      background: 'var(--color-stone)',
      color: 'var(--color-ink)',
      border: 'none'
    },
    dark: {
      background: 'rgba(255,255,255,0.10)',
      color: 'var(--color-white)',
      border: '1px solid var(--border-on-dark)'
    },
    blue: {
      background: 'transparent',
      color: 'var(--accent-blue)',
      border: '1px solid var(--accent-blue)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '12px',
      lineHeight: 1.4,
      fontWeight: 'var(--weight-medium)',
      padding: '4px 10px',
      borderRadius: 'var(--radius-full)',
      display: 'inline-flex',
      alignItems: 'center',
      whiteSpace: 'nowrap',
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. Mostly flat — depth from surface alternation + thin
 * borders, not shadows. `stone` is the warm product-card surface; `media`
 * adds the system's only real shadow for rounded media cards.
 */
function Card({
  children,
  surface = 'white',
  radius = 'md',
  bordered = false,
  pad = '28px',
  style,
  ...rest
}) {
  const surfaces = {
    white: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)'
    },
    stone: {
      background: 'var(--surface-stone)',
      color: 'var(--text-primary)'
    },
    dark: {
      background: 'var(--color-near-black)',
      color: 'var(--text-on-dark)'
    },
    green: {
      background: 'var(--surface-green)',
      color: 'var(--text-on-dark)'
    },
    navy: {
      background: 'var(--surface-navy)',
      color: 'var(--text-on-dark)'
    }
  };
  const radii = {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)'
  };
  const isDark = surface === 'dark' || surface === 'green' || surface === 'navy';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      borderRadius: radii[radius] || radius,
      padding: pad,
      boxSizing: 'border-box',
      boxShadow: surface === 'media' ? 'var(--elev-media)' : 'none',
      border: bordered ? isDark ? '1px solid var(--border-on-dark)' : '1px solid var(--border-card)' : 'none',
      ...(surfaces[surface] || surfaces.white),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Chip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Large coral taxonomy chip for the blog/editorial index. Active chips invert
 * to a coral fill with dark text; inactive chips use a coral outline on a pale
 * fill. Deliberately oversized — taxonomy as a hero-level control.
 */
function Chip({
  children,
  active = false,
  onClick,
  style,
  ...rest
}) {
  const styles = {
    fontFamily: 'var(--font-body)',
    fontSize: '18px',
    lineHeight: 1.2,
    fontWeight: 'var(--weight-medium)',
    padding: '12px 22px',
    borderRadius: 'var(--radius-sm)',
    cursor: 'pointer',
    transition: 'background-color .15s ease, color .15s ease',
    border: '1px solid var(--accent-coral)',
    background: active ? 'var(--accent-coral)' : 'transparent',
    color: active ? 'var(--color-near-black)' : 'var(--color-ink)',
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    onClick: onClick,
    style: styles,
    "aria-pressed": active
  }, rest), children);
}
Object.assign(__ds_scope, { Chip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Chip.jsx", error: String((e && e.message) || e) }); }

// components/content/MonoLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Uppercase mono technical label — category and system markers used on
 * product and research surfaces. Optional leading dot for status.
 */
function MonoLabel({
  children,
  dot,
  color,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--type-mono-size)',
      lineHeight: 'var(--type-mono-line)',
      letterSpacing: 'var(--type-mono-track)',
      textTransform: 'uppercase',
      color: color || 'var(--text-tertiary)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      ...style
    }
  }, rest), dot ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: '6px',
      height: '6px',
      borderRadius: 'var(--radius-full)',
      background: dot === true ? 'var(--accent-coral)' : dot
    }
  }) : null, children);
}
Object.assign(__ds_scope, { MonoLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MonoLabel.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input — rectangular with thin gray border, compact label, and a
 * violet focus border. Used in contact forms and footer newsletter fields.
 */
function Input({
  label,
  id,
  type = 'text',
  placeholder,
  value,
  onChange,
  required = false,
  onDark = false,
  style,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-primary)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-coral)'
    }
  }, " *") : null) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '16px',
      lineHeight: 1.5,
      padding: '12px 16px',
      borderRadius: 'var(--radius-xs)',
      background: onDark ? 'rgba(255,255,255,0.04)' : 'var(--color-white)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-primary)',
      border: `1px solid ${focused ? 'var(--ring-input-focus)' : onDark ? 'var(--border-on-dark)' : 'var(--border-default)'}`,
      outline: 'none',
      transition: 'border-color .15s ease',
      width: '100%',
      boxSizing: 'border-box'
    }
  }, rest)));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/marketing/AnnouncementBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Full-width black announcement strip above the nav. Centered microcopy with
 * an underlined link and a close control at the far right.
 */
function AnnouncementBar({
  children,
  linkLabel = 'Learn more',
  href = '#',
  onClose,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(true);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: 'var(--color-black)',
      color: 'var(--color-white)',
      minHeight: 'var(--announcement-h)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '8px 48px',
      position: 'relative',
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      lineHeight: 1.4,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), linkLabel ? /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      color: 'var(--color-white)',
      textDecoration: 'underline',
      textUnderlineOffset: '3px'
    }
  }, linkLabel) : null, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: () => {
      setOpen(false);
      onClose && onClose();
    },
    style: {
      position: 'absolute',
      right: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      background: 'transparent',
      border: 'none',
      color: 'var(--color-white)',
      cursor: 'pointer',
      fontSize: '16px',
      lineHeight: 1,
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/marketing/TrustLogoStrip.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Trust-logo strip — centered eyebrow copy above a quiet row of monochrome
 * partner marks. No cards, no borders; wide horizontal spacing.
 */
function TrustLogoStrip({
  caption = 'Trusted by enterprise teams',
  logos = [],
  onDark = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      margin: '0 0 40px'
    }
  }, caption), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '56px'
    }
  }, logos.map((logo, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '-0.4px',
      color: onDark ? 'var(--color-white)' : 'var(--color-near-black)',
      opacity: 0.7
    }
  }, typeof logo === 'string' ? logo : logo))));
}
Object.assign(__ds_scope, { TrustLogoStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/marketing/TrustLogoStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/App.jsx
try { (() => {
/* global React */
function App() {
  const [view, setView] = React.useState('home');
  const Nav = window.RANav,
    Footer = window.RAFooter,
    HomeView = window.RAHomeView,
    BlogView = window.RABlogView;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Nav, {
    view: view,
    onNavigate: setView
  }), view === 'blog' ? /*#__PURE__*/React.createElement(BlogView, null) : /*#__PURE__*/React.createElement(HomeView, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.RAApp = App;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/BlogView.jsx
try { (() => {
/* global React */
const {
  Chip,
  PillOutline,
  MonoLabel,
  Button
} = window.ReidAtlanticDesignSystem_92e79f;
function BlogView() {
  const [filter, setFilter] = React.useState('All');
  const chips = ['All', 'Product', 'Research', 'Engineering', 'Company'];
  const posts = [{
    cat: 'Product',
    title: 'Introducing North: a secure AI workspace for the enterprise',
    date: 'Jun 12, 2026',
    read: '6 min'
  }, {
    cat: 'Research',
    title: 'Grounded generation: measuring faithfulness in retrieval systems',
    date: 'Jun 04, 2026',
    read: '11 min'
  }, {
    cat: 'Engineering',
    title: 'How we serve long-context models at low latency',
    date: 'May 28, 2026',
    read: '8 min'
  }, {
    cat: 'Research',
    title: 'Multilingual embeddings across 100+ languages',
    date: 'May 19, 2026',
    read: '9 min'
  }, {
    cat: 'Company',
    title: 'ReidAtlantic achieves SOC 2 Type II and ISO 27001',
    date: 'May 09, 2026',
    read: '3 min'
  }, {
    cat: 'Product',
    title: 'Rerank 3: sharper relevance for any search stack',
    date: 'Apr 30, 2026',
    read: '5 min'
  }];
  const shown = filter === 'All' ? posts : posts.filter(p => p.cat === filter);
  return /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '64px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, null, "Blog"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(40px,6vw,72px)',
      lineHeight: 1.0,
      letterSpacing: '-1.44px',
      margin: '16px 0 40px'
    }
  }, "Notes from the lab"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      flexWrap: 'wrap',
      marginBottom: '20px'
    }
  }, chips.map(c => /*#__PURE__*/React.createElement(Chip, {
    key: c,
    active: filter === c,
    onClick: () => setFilter(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
      alignItems: 'center',
      marginBottom: '8px',
      paddingBottom: '20px'
    }
  }, /*#__PURE__*/React.createElement(PillOutline, {
    active: true,
    count: shown.length
  }, "Latest"), /*#__PURE__*/React.createElement(PillOutline, null, "Most read"), /*#__PURE__*/React.createElement(PillOutline, null, "Featured"), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Search articles",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '14px',
      padding: '9px 16px',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid var(--border-default)',
      outline: 'none',
      minWidth: '220px'
    }
  })), /*#__PURE__*/React.createElement("div", null, shown.map((p, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    style: {
      textDecoration: 'none',
      color: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("article", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto auto',
      alignItems: 'center',
      gap: '24px',
      padding: '28px 0',
      borderTop: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      marginBottom: '10px',
      fontFamily: 'var(--font-mono)',
      fontSize: '12px',
      letterSpacing: '.28px',
      textTransform: 'uppercase',
      color: 'var(--accent-coral)'
    }
  }, p.cat), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: 1.3,
      margin: 0,
      color: 'var(--text-strong)'
    }
  }, p.title)), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, p.read), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, p.date)))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      paddingTop: '40px',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Load more articles")))));
}
window.RABlogView = BlogView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/BlogView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* global React */
const {
  Input,
  Button,
  MonoLabel
} = window.ReidAtlanticDesignSystem_92e79f;
function Footer() {
  const cols = [{
    h: 'Platform',
    links: ['Command', 'North', 'Embed', 'Rerank', 'Fine-tuning']
  }, {
    h: 'Solutions',
    links: ['Financial services', 'Healthcare', 'Manufacturing', 'Public sector']
  }, {
    h: 'Resources',
    links: ['Docs', 'Research', 'Blog', 'Changelog', 'Status']
  }, {
    h: 'Company',
    links: ['About', 'Careers', 'Security', 'Contact']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-dark)',
      color: 'var(--text-on-dark)',
      padding: '80px 40px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '40px',
      flexWrap: 'wrap',
      paddingBottom: '56px',
      borderBottom: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '360px'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    color: "var(--accent-coral)"
  }, "AI moves fast"), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '32px',
      letterSpacing: '-0.32px',
      lineHeight: 1.2,
      margin: '16px 0 24px'
    }
  }, "Keep up with the latest from ReidAtlantic"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '12px',
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    onDark: true,
    placeholder: "Email address",
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "inverse",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "Subscribe"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '56px',
      flexWrap: 'wrap'
    }
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      fontWeight: 500
    }
  }, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: '14px',
      color: 'var(--text-on-dark-muted)',
      textDecoration: 'none'
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '24px',
      flexWrap: 'wrap',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark-white.svg",
    height: "28",
    alt: "ReidAtlantic"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '12px',
      color: 'var(--text-on-dark-muted)'
    }
  }, "\xA9 2026 ReidAtlantic, Inc. All rights reserved."))));
}
window.RAFooter = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/HomeView.jsx
try { (() => {
/* global React */
const {
  Button,
  Card,
  Badge,
  MonoLabel,
  TrustLogoStrip
} = window.ReidAtlanticDesignSystem_92e79f;
function AgentConsole() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--color-near-black)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px',
      color: 'var(--text-on-dark)',
      boxShadow: 'var(--elev-media)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '16px'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    color: "var(--text-on-dark-muted)",
    dot: "#4ade80"
  }, "Agent \xB7 Research assistant"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '6px'
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "dark"
  }, "Slack"), /*#__PURE__*/React.createElement(Badge, {
    variant: "dark"
  }, "Drive"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'flex-end',
      background: 'rgba(255,255,255,0.08)',
      borderRadius: '14px 14px 4px 14px',
      padding: '10px 14px',
      fontSize: '14px',
      maxWidth: '80%'
    }
  }, "Summarize the Q3 compliance filings and flag anything unusual."), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'rgba(255,119,89,0.10)',
      border: '1px solid rgba(255,119,89,0.25)',
      borderRadius: '14px 14px 14px 4px',
      padding: '12px 14px',
      fontSize: '14px',
      maxWidth: '88%',
      lineHeight: 1.5
    }
  }, "Reviewed 14 filings. Three contain revised revenue language; one references an undisclosed related-party transaction. Citations attached.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px',
      alignItems: 'center',
      marginTop: '16px',
      border: '1px solid var(--border-on-dark)',
      borderRadius: 'var(--radius-full)',
      padding: '8px 8px 8px 16px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      color: 'var(--text-on-dark-muted)',
      flex: 1
    }
  }, "Ask a follow-up\u2026"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '28px',
      borderRadius: '50%',
      background: '#fff',
      color: '#17171c',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '14px'
    }
  }, "\u2191")));
}
function HomeView() {
  const products = [{
    tag: 'Command',
    title: 'Command R+',
    body: 'A scalable model built for enterprise retrieval and tool use.',
    bullets: ['128K context window', 'Retrieval-augmented generation', 'Multi-step tool use']
  }, {
    tag: 'Embed',
    title: 'Embed 4',
    body: 'State-of-the-art embeddings for search across 100+ languages.',
    bullets: ['Multilingual search', 'Compression-aware', 'On-prem deployable']
  }, {
    tag: 'Rerank',
    title: 'Rerank 3',
    body: 'Sharpen any search stack with a precise relevance reranker.',
    bullets: ['Plug into any index', 'Low-latency scoring', 'Long-document support']
  }];
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '80px 40px 64px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '960px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(48px, 7vw, 96px)',
      lineHeight: 1.0,
      letterSpacing: '-1.92px',
      margin: '0 0 24px',
      color: 'var(--text-strong)'
    }
  }, "The AI platform for the enterprise"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '18px',
      lineHeight: 1.4,
      color: 'var(--text-primary)',
      maxWidth: '560px',
      margin: '0 auto 32px'
    }
  }, "Secure, deployable models and agents that turn your organization's knowledge into work that gets done."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Try the Playground")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      display: 'grid',
      gridTemplateColumns: '1.6fr 1fr',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement(AgentConsole, null), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-lg)',
      background: 'linear-gradient(135deg, #003c33, #071829)',
      minHeight: '260px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: '24px',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    color: "var(--text-on-dark-muted)"
  }, "Deploy anywhere"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '28px',
      letterSpacing: '-0.32px',
      lineHeight: 1.1,
      margin: '12px 0 0'
    }
  }, "Cloud, VPC, or fully on-prem.")))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '40px 40px 96px'
    }
  }, /*#__PURE__*/React.createElement(TrustLogoStrip, {
    caption: "Trusted by enterprise teams worldwide",
    logos: ['Northwind', 'Meridian', 'Oasis', 'Bellweather', 'Lumen', 'Vantage']
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-green)',
      color: 'var(--text-on-dark)',
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement(MonoLabel, {
    color: "var(--text-on-dark-muted)"
  }, "North"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(36px,5vw,60px)',
      lineHeight: 1.0,
      letterSpacing: '-1.2px',
      margin: '16px 0 56px',
      maxWidth: '720px'
    }
  }, "A secure AI workspace for every team"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '24px'
    }
  }, [{
    ill: 'agents',
    h: 'Agents that act',
    b: 'Build agents that search, reason, and complete multi-step work across your tools.'
  }, {
    ill: 'retrieval',
    h: 'Grounded retrieval',
    b: 'Answers cite the source documents — no hallucinated facts, full traceability.'
  }, {
    ill: 'security',
    h: 'Private by design',
    b: 'Your data never leaves your environment. SOC 2, deployable in your own VPC.'
  }].map(c => /*#__PURE__*/React.createElement(Card, {
    key: c.h,
    surface: "green",
    bordered: true,
    radius: "md",
    pad: "28px"
  }, /*#__PURE__*/React.createElement("img", {
    src: `../../assets/illustration-${c.ill}.svg`,
    width: "48",
    alt: "",
    style: {
      filter: 'invert(1)'
    }
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 400,
      fontSize: '24px',
      lineHeight: 1.3,
      margin: '20px 0 10px'
    }
  }, c.h), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      lineHeight: 1.5,
      color: 'var(--text-on-dark-muted)',
      margin: 0
    }
  }, c.b)))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '96px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px,4vw,48px)',
      lineHeight: 1.2,
      letterSpacing: '-0.48px',
      margin: '0 0 40px'
    }
  }, "Models built for production"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '24px'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(Card, {
    key: p.title,
    surface: "stone",
    radius: "sm",
    pad: "28px"
  }, /*#__PURE__*/React.createElement(MonoLabel, null, p.tag), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: '32px',
      letterSpacing: '-0.32px',
      lineHeight: 1.2,
      margin: '12px 0 8px'
    }
  }, p.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '16px',
      lineHeight: 1.5,
      color: 'var(--text-tertiary)',
      margin: '0 0 20px'
    }
  }, p.body), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-default)',
      paddingTop: '16px',
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '24px'
    }
  }, p.bullets.map(b => /*#__PURE__*/React.createElement("div", {
    key: b,
    style: {
      display: 'flex',
      gap: '10px',
      fontSize: '14px',
      color: 'var(--text-primary)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent-coral)'
    }
  }, "\u2713"), b))), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Learn more")))))), /*#__PURE__*/React.createElement("section", {
    style: {
      padding: '0 40px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      background: 'var(--surface-navy)',
      borderRadius: 'var(--radius-lg)',
      padding: '80px 40px',
      textAlign: 'center',
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'clamp(32px,4vw,48px)',
      lineHeight: 1.2,
      letterSpacing: '-0.48px',
      margin: '0 0 24px'
    }
  }, "Put AI to work in your enterprise"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "inverse"
  }, "Request a demo"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    style: {
      color: '#fff',
      textDecorationColor: '#fff'
    }
  }, "Talk to sales")))));
}
window.RAHomeView = HomeView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/HomeView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* global React */
const {
  Button,
  AnnouncementBar
} = window.ReidAtlanticDesignSystem_92e79f;
function Nav({
  view,
  onNavigate
}) {
  const items = [{
    id: 'home',
    label: 'Platform'
  }, {
    id: 'home',
    label: 'Products'
  }, {
    id: 'blog',
    label: 'Blog'
  }, {
    id: 'home',
    label: 'Research'
  }, {
    id: 'home',
    label: 'Pricing'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(AnnouncementBar, {
    linkLabel: "Read the announcement",
    href: "#"
  }, "ReidAtlantic North is now generally available"), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '16px 40px',
      borderBottom: '1px solid var(--border-card)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate('home');
    },
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-wordmark.svg",
    height: "32",
    alt: "ReidAtlantic"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '28px',
      justifyContent: 'center'
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    key: i,
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNavigate(it.id);
    },
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      textDecoration: 'none',
      color: it.label === 'Blog' && view === 'blog' ? 'var(--text-strong)' : 'var(--text-primary)',
      opacity: 0.85
    }
  }, it.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '20px',
      alignItems: 'center',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: '15px',
      color: 'var(--text-primary)',
      textDecoration: 'none'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Request a demo"))));
}
window.RANav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.PillOutline = __ds_scope.PillOutline;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Chip = __ds_scope.Chip;

__ds_ns.MonoLabel = __ds_scope.MonoLabel;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.TrustLogoStrip = __ds_scope.TrustLogoStrip;

})();
