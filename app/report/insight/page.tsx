import { Barchart } from '@/components/shared/barchart';
import Button from '@/components/shared/button';
import { DonughtChart } from '@/components/shared/donughtchart';
import ReportCard from '@/components/shared/reportCard';

const Insights = () => {
  return (
    <div className="space-y-10 w-[80%] mx-auto">
      <div className="grid grid-cols-2  place-items-center ">
        <div className="w-full space-y-2">
          <p className="font-semibold text-base">Harvest season</p>
          <div className="border border-gray-400">
            <Barchart />
          </div>
        </div>
        <div className="w-full md:w-[60%] space-y-4">
          <div>
            <ReportCard title="Insights">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                quasi beatae ducimus tempore cumque consequuntur earum totam
                facere sapiente sit! Minima deleniti eum hic est labore, quas
                tempore consequuntur dignissimos.
              </p>
            </ReportCard>
          </div>
          <div className="flex items-center justify-center">
            <Button children="Download Report" className="rounded-none px-8" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2  place-items-center">
        <div className="w-full ">
          <p className="font-semibold text-base">Planting season</p>
          <div className="border border-gray-400">
            <DonughtChart />
          </div>
        </div>
        <div className="w-full md:w-[60%] space-y-4">
          <div>
            <ReportCard title="Insights">
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                quasi beatae ducimus tempore cumque consequuntur earum totam
                facere sapiente sit! Minima deleniti eum hic est labore, quas
                tempore consequuntur dignissimos.
              </p>
            </ReportCard>
          </div>
          <div className="flex items-center justify-center">
            <Button children="Download Report" className="rounded-none px-8" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Insights;
