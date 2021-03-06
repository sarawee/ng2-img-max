import { Observable } from 'rxjs';
import { Ng2PicaService } from 'ng2-pica';
import { ImgExifService } from './img-exif.service';
export declare class ImgMaxPXSizeService {
    private ng2PicaService;
    private imageExifService;
    timeAtStart: number;
    constructor(ng2PicaService: Ng2PicaService, imageExifService: ImgExifService);
    resizeImage(file: File, maxWidth: number, maxHeight: number, logExecutionTime?: boolean): Observable<any>;
    private logExecutionTime(logExecutionTime);
}
