import sprite from "../../images/sprite.svg";

export default function UserMenu() {
  return (
    <div>
      <button type="button">
        профиль
        <svg>
          <use href={sprite + "#icon-user"}></use>
        </svg>
      </button>
    </div>
  );
}
