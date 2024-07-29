import Image from 'next/image';
import Link from 'next/link';
import Button from './button';
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const router = useRouter();

  const gotoReport = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push('onboarding');
  };

  return (
    <nav className="flex items-center justify-between border-b px-8 py-3 h-16">
      <div className="relative w-14 h-14 border border-red-600">
        <Image
          src="/logo.png"
          alt="frame"
          layout="fill"
          objectFit="contain"
          className="w-full"
        />
      </div>
      <ul className="flex items-center gap-4">
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
      <div className="flex items-center gap-2">
        <Button
          className="px-10 bg-transparent  text-base font-medium !text-black/80 border"
          handleClick={() => console.log('clicked')}
        >
          Learn
        </Button>
        <Button
          className="px-10 text-base font-medium rounded-md"
          handleClick={gotoReport}
        >
          Get Report
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
