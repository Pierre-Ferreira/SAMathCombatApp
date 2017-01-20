// import create_mpt_ticket from './create_mpt_ticket';
import get_mpt_ticket_info from './get_mpt_ticket_info';
import update_mpt_ticket from './update_mpt_ticket';
import create_game_result_record from './create_game_result_record';

export default function () {
  get_mpt_ticket_info();
  update_mpt_ticket();
  create_game_result_record();
}
