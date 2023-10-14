import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import { pDisplay } from '../utils/fonts';

interface DashLayoutProps {
  children: React.ReactNode;
}

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/journal',
    label: 'Journal',
  },
  {
    href: '/history',
    label: 'History',
  },
];

const DashboardLayout = ({ children }: DashLayoutProps) => {
  return (
    <div className="h-screen w-screen relative pr-10">
      <aside className="absolute w-[200px] top-0 left-0 h-full border-r border-black/10">
        <div>
          <div>
            <h2
              className="text-xl h-[60px] border-b border-black/10  flex items-center px-6 font-semibold text-yellow-600"
              style={{ fontFamily: pDisplay.className }}
            >
              Your ai journal
            </h2>
          </div>
          <ul className="list-none px-6 mt-5">
            {links.map((el) => {
              return (
                <li
                  key={el.label}
                  className="px-2 mt-3 text-xl hover:text-yellow-600 transition-all duration-200"
                  style={{ fontFamily: pDisplay.className }}
                >
                  <Link href={el.href}>{el.label}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
      <div className="ml-[200px] h-full">
        <header className="h-[60px] border-b border-black/10">
          <div className="h-full w-full px-6 flex items-center justify-end">
            <UserButton />
          </div>
        </header>
        <div className="h-[calc(100vh-60px)]">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
