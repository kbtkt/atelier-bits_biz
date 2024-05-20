"use client";
import { useState, type FC } from "react";
import "../../css/style.scss";

const Drawer: FC = () => {
  const [menu, setMenu] = useState(false);
  const handleDrawerMenu = () => {
    setMenu(!menu);
    console.log(menu);
  };
  const headerSp = [
    {
      href: "/web",
      label: "webサイト制作",
    },
    {
      href: "/logo",
      label: "CI・ロゴ制作",
    },
    {
      href: "/dtp",
      label: "印刷物制作",
    },
    {
      href: "/performance",
      label: "制作実績",
    },
    {
      href: "/corporate",
      label: "会社情報",
    },
    {
      href: "/contact",
      label: "お問合わせ",
    },
    {
      href: "/sitemap",
      label: "サイトマップ",
    },
  ];

  return (
    <div className="sp-header">
      <a href="/">
        <img src="logo.png" alt="ロゴ" />
      </a>
      <button
        onClick={handleDrawerMenu}
        type="button"
        className={"drawer_trigger " + (menu ? "open" : "")}
      >
        <span></span>
        <span></span>
      </button>
      <ul className={"drawer " + (menu ? "open" : "")}>
        {headerSp.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.label}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Drawer;
