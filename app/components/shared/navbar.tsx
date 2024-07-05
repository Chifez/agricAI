import Image from 'next/image';
import Link from 'next/link';
import Button from './button';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b px-8 py-3 h-16">
      <div className="relative w-14 h-14">
        <Image
          src="/logo.png"
          alt="frame"
          layout="fill"
          objectFit="contain"
          className="w-full"
        />
      </div>
      <ul className="flex items-center gap-4 ">
        <li>
          <Link href={''} className="text-base font-medium text-black/80">
            Planting Season
          </Link>
        </li>
        <li>
          <Link href={''} className="text-base font-medium text-black/80">
            About Us
          </Link>
        </li>
      </ul>
      <div className="flex items-center gap-2 ">
        <Button className="px-10 bg-transparent text-black/80 text-base font-medium">
          Learn
        </Button>
        <Button className="px-14 text-base font-medium rounded-md">
          Get Report
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
