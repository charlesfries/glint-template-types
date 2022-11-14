declare module 'ember-power-select/components/power-select/options' {
    import Component from '@glimmer/component';

    import { PowerSelectArgs, Select } from 'ember-power-select/components/power-select';

    interface PowerSelectOptionsArgs<O>
        extends Pick<
            PowerSelectArgs<O>,
            'loadingMessage' | 'groupComponent' | 'optionsComponent' | 'options' | 'extra'
        > {
        select: Select;
        highlightOnHover?: boolean;
        options: O[];
        groupIndex: '';
    }

    export interface PowerSelectOptionsSignature<O> {
        Args: PowerSelectOptionsArgs<O>;
        Blocks: {
            default?: [O, Select];
        };
        Element: HTMLUListElement;
    }
    export default class Options<O> extends Component<PowerSelectOptionsSignature<O>> {}
}
