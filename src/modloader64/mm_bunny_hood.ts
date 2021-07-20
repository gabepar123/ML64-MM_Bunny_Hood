import {IPlugin, IModLoaderAPI} from 'modloader64_api/IModLoaderAPI';
import {InventoryItem, IOOTCore} from 'modloader64_api/OOT/OOTAPI';
import {InjectCore} from 'modloader64_api/CoreInjection';

class mm_bunny_hood implements IPlugin{

    ModLoader!: IModLoaderAPI;
    pluginName?: string | undefined;
    @InjectCore()
    core!: IOOTCore;

    preinit(): void {
    }
    init(): void {
    }
    postinit(): void {
    }
    onTick(frame?: number | undefined): void {
        if (!this.core.helper.isTitleScreen && this.core.helper.isSceneNumberValid)
            this.core.save.inventory.childTradeItem = InventoryItem.BUNNY_HOOD;
            this.core.save.
    }

}

mo