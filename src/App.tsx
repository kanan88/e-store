import { Button } from '@/components/ui/button';
import { useAppSelector, useAppDispatch } from './hooks';

const App = () => {
  const { name } = useAppSelector((state) => state.userState);
  console.log(name);

  return (
    <div>
      <h1 className="text-7xl font-bold">App</h1>
      <Button
        variant="destructive"
        size="lg"
        onClick={() => console.log('Button clicked...')}
      >
        Cick me
      </Button>
    </div>
  );
};

export default App;
