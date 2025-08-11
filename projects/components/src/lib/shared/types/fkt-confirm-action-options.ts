import { FktComponentData } from './fkt-component-data';
import { ConfirmActionComponent } from '../../components/confirm-action/confirm-action.component';

export interface FktConfirmActionOptions
	extends FktComponentData<ConfirmActionComponent> {
	backdropClick?: () => void;
}
