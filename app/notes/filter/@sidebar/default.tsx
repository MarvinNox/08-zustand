import Link from "next/link";
import css from "./SidebarNotes.module.css";
import { tagMenu } from "@/constants/constants";

export default function SidebarNotes() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/notes/action/create/`} className={css.menuLink}>
          Create Note+
        </Link>
      </li>
      {tagMenu.map((tag) => (
        <li key={tag} className={css.menuItem}>
          <Link href={`/notes/filter/${tag}`} className={css.menuLink}>
            {tag}
          </Link>
        </li>
      ))}
    </ul>
  );
}
