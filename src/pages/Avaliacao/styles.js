import styled from 'styled-components';
import { Table, Form } from 'react-bootstrap';
import { FaReply, FaSave, FaPaperPlane, FaClipboardList } from 'react-icons/fa';

export const Header = styled.div`
  background-color: white;
  height: 105px;
  padding: 15px 40px;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.125);

  display: flex;
  flex-direction: row;
`;

export const ButtonGoBack = styled(FaReply).attrs({
  size: 35,
})`
  display: inline-block;
  width: 80px;
  margin: auto auto auto 0;
  color: #1ab394;

  &:hover {
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  height: 100%;
  width: 1px;
  background-color: rgba(0,0,0,.125);
`;

export const HeaderButtons = styled.div`
  display: inline;
  margin: auto auto auto auto;
`;

export const ButtonSave = styled(FaSave).attrs({
  size: 35,
})`
  color: #1ab394;
  margin-left: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonEnviar = styled(FaPaperPlane).attrs({
  size: 35,
})`
  color: #1ab394;
  margin-left: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonHistorico = styled(FaClipboardList).attrs({
  size: 35,
})`
  color: #1ab394;
  margin-left: 30px;

  &:hover {
    cursor: pointer;
  }
`;

export const HeaderColaborador = styled.div`
  display: inline-block;
  display: flex;
  flex-direction: column;

  width: 325px;
  padding: 0 20px;
  margin: auto 0;

  .nome {
    font-size: 18px;
  }

  .cargo {
    font-size: 14px;
  }

  .departamento {
    font-size: 14px;
  }
`;

export const FormAvaliacao = styled(Form)``;

export const TableAvaliacao = styled(Table).attrs({
  responsive: 'md',
})`
  width: 100%;
  margin-top: 10px;
  background: #fff;
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,.125);
  box-sizing: border-box;

  thead {
    tr:first-child {
      background-color: rgba(26, 179, 148, 0.75);
      color: #fff;
    }

    th {
      width: 50px;
      border-top: 1px solid #eee;
      vertical-align: middle;
      text-align: center;
    }

    th:first-child {
      border-right: 1px solid #eee;
    }

    th:first-child + th {
      width: 700px;
      border-right: 1px solid #eee;
    }
  }

  tbody {
    td {
      width: 50px;
      border-top: 1px solid #eee;
      vertical-align: middle;
      text-align: center;
    }

    td:first-child {
      border-right: 1px solid #eee;
    }

    td:first-child + td {
      width: 700px;
      border-right: 1px solid #eee;
      text-align: left;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }
  }

  tr:hover {
    background: #eee;
  }
`;

export const Tooltip = styled.div`
  background-color: #1ab394;
  padding: 2px 10px;
  color: white;
  border-radius: 4px;
`;
