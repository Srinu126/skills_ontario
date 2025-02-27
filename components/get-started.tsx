import Image from "next/image";
import styles from "../styles";
import Link from "next/link";

const GetStarted = () => (
  <Link
    href="/books"
    className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
  >
    <div
      className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
    >
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-gradient">Explore</span>
        </p>
        <Image
          src="/arrow-up.svg"
          alt="arrow-up"
          className="w-[23px] h-[23px] object-contain"
          width={23}
          height={23}
        />
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-gradient">Books</span>
      </p>
    </div>
  </Link>
);

export default GetStarted;
