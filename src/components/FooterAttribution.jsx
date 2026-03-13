const FooterAttribution = () => {
  return (
    <span
      className="stat-box__label"
      style={{
        width: "100%",
        display: "block",
        textAlign: "center",
        marginBottom: "1rem",
        opacity: "0.75",
        fontWeight: "200",
      }}
    >
      A driving theory practice app with Context Api, useReducer and useMemo -
      Coded by{" "}
      <a
        href="https://bilalturkmen.com"
        target="_blank"
        aria-label="visit the coder's webpage"
        className=""
        style={{
          color: "#a5b4fc",
        }}
      >
        Bilal Türkmen
      </a>
      .
    </span>
  );
};

export default FooterAttribution;
