import { RigBusModule } from './rig-bus.module';

describe('RigBusModule', () => {
  let rigBusModule: RigBusModule;

  beforeEach(() => {
    rigBusModule = new RigBusModule();
  });

  it('should create an instance', () => {
    expect(rigBusModule).toBeTruthy();
  });
});
