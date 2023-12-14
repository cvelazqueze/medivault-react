import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { montserratBold } from '@/app/ui/fonts';

export default function MediVaultLogo() {
  return (
    <div
      className={`${montserratBold.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[40px]">MediVault</p>
    </div>
  );
}
